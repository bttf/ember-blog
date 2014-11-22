import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'entry',
  createToggle: false,
  passwordError: false,
  newUser: {},
  actions: {
    toggleCreate: function() {
      if (!this.get('createToggle')) {
        this.set('newUser', this.store.createRecord('user'));
      }
      this.set('createToggle', !this.get('createToggle'));
    },
    save: function(user) {
      if (user.get('password') !== user.get('confirmPass')) {
        user.set('passwordError', true);
      }
      else {
        var controller = this;
        user.save().then(function(res) {
          console.log('user created');
          controller.set('createToggle', !controller.get('createToggle'));
        }, function(err) {
          console.log('error');
          console.log(err);
        });
      }
    },
    delete: function(user) {
      user.deleteRecord();
      user.save().then(
        function() {
        console.log('He\'s deleted, Jim.');
      }, function(err) {
        console.log('error deleting');
        console.log(err);
      });
    }
  }
});
