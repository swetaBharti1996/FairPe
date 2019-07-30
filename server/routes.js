const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
routes.add("about", "/about");
routes.add("contact", "/contact");
routes.add("product", "/product/:id");
routes.add("account", "/account/:ext");
