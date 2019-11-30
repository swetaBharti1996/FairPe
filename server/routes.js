const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
routes.add("about", "/about");
routes.add("offline", "/offline-partners");
routes.add("faq", "/faq");
routes.add("vendor", "/become-partner");
routes.add("careers", "/careers");
routes.add("contact", "/contact");
routes.add("category", "/category/:slug");
routes.add("product", "/product/:id");
routes.add("account", "/account/:ext");
routes.add("privacy", "/privacy-policy");
