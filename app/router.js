import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontendENV.locationType
});

Router.map(function() {
  this.resource('article', { path: '/article/:article_id' }, function() {
    this.route('edit');
  });
});

export default Router;
