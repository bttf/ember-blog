import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    logout: function() {
      this.get('session').invalidate('authenticator:custom');
    }
  }
});
