import Ember from 'ember';

export default Ember.ObjectController.extend({
  error: false,

  actions: {
    auth: function() {
      var controller = this;

      this.get('session').authenticate('authenticator:custom', {
        username: $('#username').val(),
        password: $('#password').val()
      }).then(function() {
        console.log('LOGIN SUCCESS');
        controller.transitionToRoute('index');
      }, function(err) {
        console.log('LOGIN FAILURE');
        console.log(err);
        controller.set('error', true);
      });
    }
  }
});

