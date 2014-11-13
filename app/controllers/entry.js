import Ember from 'ember';

export default Ember.ObjectController.extend({
  deleteToggle: false,
  actions: {
    toggleDelete: function() {
      if (this.get('deleteToggle')) {
        this.set('deleteToggle', !this.get('deleteToggle'));
      }
      else {
        this.set('deleteToggle', !this.get('deleteToggle'));
      }
    }
  }
});
