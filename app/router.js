import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType

});

Router.map(function() {
  this.resource('entry', { path: '/entry/:entry_id' }, function() {
    this.route('edit');

  });

  this.route('create');

  this.route('login');
  this.route('logout');
  this.route('drafts');
  this.route('accounts');
  this.route('tag', { path: '/tag/:tag_name' });
});

export default Router;

