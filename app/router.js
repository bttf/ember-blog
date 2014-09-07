import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontendENV.locationType
});

Router.map(function() {
  // this.route("index");
});

export default Router;
