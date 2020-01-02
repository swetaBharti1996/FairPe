import _ from "lodash";
import queryString from "query-string";

// var filters = [];
export const parseProducts = (products = []) => {
  const obj = {};
  _.map(products, product => {
    const id = product._id;
    const p = _.get(product, "_source.search_result_data", {});
    obj[id] = p;
    obj[id].score = _.get(
      product,
      "_source.search_data.scores.mappingScore",
      {}
    );
  });

  return obj;
};

const findLevel1Bucket = (facet, filters) => {
  const buckets = _.get(facet, "facet_name.buckets", []).filter(
    f => f.key != null
  );
  _.map(buckets, item => {
    filters.push({ [item.key]: _.get(item, "facet_value.buckets", []) });
  });
  return;
};
const findLevel2Bucket = (facet, filters) => {
  Object.keys(facet).map(key => {
    if (key != "agg_attr_strings_filter2" && key != "Category") {
      const filKey = key.substring(12, key.length);
      try {
        filters.push({
          [filKey]: _.get(
            facet,
            `${key}.agg_filtered_special_5.facet_value.buckets`,
            []
          )
        });
      } catch {}
    }
  });
  return;
};
const findLevel3Bucket = (facet, filters) => {
  Object.keys(facet).map(key => {
    if (key != "doc_count" && key != "meta") {
      const filKey = key.substring(12, key.length);
      try {
        if (_.isEmpty(_.get(facet, `${key}.facet_name.facet_value.buckets`)))
          throw "undefined";
        filters.push({
          [filKey]: _.get(facet, `${key}.facet_name.facet_value.buckets`)
        });
      } catch {
        console.log(filKey, _.get(facet, `${key}.facet_name.buckets`));
        filters.push({
          [filKey]: _.get(
            facet,
            `${key}.facet_name.buckets[0].facet_value.buckets`
          )
        });
      }
    }
  });
  return;
};
export const parseAggregtions = (aggregations = {}, qs = "") => {
  const query = queryString.parse(qs);
  var filters = [];
  if (!query.category) {
    try {
      filters.push({
        categoryBuckets: _.get(
          aggregations,
          "Category.ParentCategory.buckets",
          null
        )
      });
    } catch {}
    return filters;
  } else {
    var filters = [];
    var selFil = [];
    try {
      filters.push({
        categoryBuckets: _.get(
          aggregations,
          "Category.ParentCategory.buckets",
          null
        )
      });
    } catch {}
    if (Object.keys(query).length > 6) {
      const selFacets = aggregations;
      try {
        const oldFacets = _.get(aggregations, "agg_attr_strings_filter2", null);
        findLevel2Bucket(selFacets, filters);
        findLevel3Bucket(oldFacets, filters);
      } catch {}
      return filters;
    } else {
      const stringFacet = _.get(aggregations, "agg_string_facet", null);
      const numberFacet = _.get(aggregations, "agg_number_facet", null);
      try {
        findLevel1Bucket(stringFacet, filters);
        findLevel1Bucket(numberFacet, filters);
      } catch {}
      return filters;
    }
  }
};
