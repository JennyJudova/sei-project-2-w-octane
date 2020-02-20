import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("search", {
    // eslint-disable-next-line ember/routes-segments-snake-case
    path: ":cityId"
  });
});

export default Router;
