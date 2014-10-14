import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    auth: function() {
      this.get('session').authenticate('authenticator:custom', {
        username: $('#username').val(),
        password: $('#password').val()

      });
    }
  }
});

