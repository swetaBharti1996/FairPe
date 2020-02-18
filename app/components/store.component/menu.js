import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import _ from "lodash";

const StoreMenu = styled.a`
  display: block;
  padding: 14px 18px;
  border-bottom: 1px solid #e8e8e8;
  font: menu;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;

  background: ${props => (props.sel ? "#e8e8e8" : "#ffffff")};
  color: ${props => (props.sel ? "#6376f1" : "#666")};

  border-right: 3px solid ${props => (props.sel ? "#6376f1" : "transparent")};

  &:hover {
    color: ${props => (props.sel ? "#6376f1" : "#555")};
  }
`;

const Menu = props => {
  const { MENU, store, setBlock, block } = props;
  return (
    <>
      <div>
        <FontAwesomeIcon icon={"store"} size={"6x"} style={{ opacity: 0.4 }} />
      </div>

      <div>
        <ul>
          {_.map(MENU, (data, i) => {
            return (
              <li>
                <StoreMenu
                  href={`#${data.type}`}
                  onClick={() => {
                    setBlock(data.type);
                  }}
                  sel={data.type === block ? true : false}
                >
                  {i === 0 ? (
                    <span>{store.name}</span>
                  ) : (
                    <span>{data.name}</span>
                  )}
                </StoreMenu>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Menu;
