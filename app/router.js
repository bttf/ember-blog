import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontendENV.locationType

});

Router.map(function() {
  this.resource('entry', { path: '/entry/:entry_id' });

  this.resource('article', { path: '/article/:article_id' }, function() {
    this.route('edit');

  });

  this.route('entry');

});

export default Router;

