import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontendENV.locationType

});

Router.map(function() {
  this.resource('entry', { path: '/entry/:entry_id' }, function() {
    this.route('edit');

  });

  this.route('create');

});

export default Router;

