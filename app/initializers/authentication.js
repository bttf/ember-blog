import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from '../config/environment';

var CustomAuthenticator = Base.extend({
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        Ember.$.ajax({
          url: ENV.APP.api_host + '/validate',
          type: 'POST',
          data: JSON.stringify({
            token: data.token
          }),
          contentType: 'application/json'
        }).then(function() {
          resolve(data);
        }, function(err) {
          reject(err);
        });
      }
      else {
        reject();
      }
    });
  },

  authenticate: function(creds) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: ENV.APP.api_host + '/auth',
        type: 'POST',
        data: JSON.stringify({
          username: creds.username,
          password: creds.password
        }),
        contentType: 'application/json'

      }).then(function(response) {
        Ember.run(function() {
          resolve({ token: response.token });
        });

      }, function(xhr, status, error) {
        console.log(error);

        Ember.run(function() {
          reject(error);

        });
      });
    });
  },

  invalidate: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: ENV.APP.api_host + '/logout',
        type: 'GET'
      }).then(function(response) {
        Ember.run(function() {
          resolve();
        });
      }, function(xhr, status, error) {
        Ember.run(function() {
          reject();
        });
      });
    });
  }
});

export var initialize = function(container, application) {
  container.register('authenticator:custom', CustomAuthenticator);
};

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: initialize
};

