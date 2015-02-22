import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    toggleComments: function() {
      this.toggleProperty('showComments');
    }
  }
});
