const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
routes.add("about", "/about");
routes.add("offline", "/offline");
routes.add("faq", "/faq");
routes.add("vendor", "/vendor");
routes.add("careers", "/careers");
routes.add("contact", "/contact");
routes.add("category", "/category/:slug");
routes.add("product", "/product/:id");
routes.add("account", "/account/:ext");
