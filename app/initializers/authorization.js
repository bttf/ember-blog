import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';

var CustomAuthorizer = Base.extend({
  // implement heyar!
  authorize: function(jqXHR /*, requestOptions*/) {
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.token'))) {
      jqXHR.setRequestHeader('token', this.get('session.token'));
    }
  }
});

export var initialize = function(container) {
  container.register('authorizer:custom', CustomAuthorizer);
};

export default {
  name: 'authorization',
  before: 'simple-auth',
  initialize: initialize
};
