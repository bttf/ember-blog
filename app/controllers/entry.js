import Ember from 'ember';

export default Ember.ObjectController.extend({
  deleteToggle: false,
  showComments: false,
  actions: {
    toggleDelete: function() {
      if (this.get('deleteToggle')) {
        this.set('deleteToggle', !this.get('deleteToggle'));
      }
      else {
        this.set('deleteToggle', !this.get('deleteToggle'));
      }
    },

    delete: function() {
      this.get('model').deleteRecord();
      this.get('model').save().then(function() {
        console.log('He\'s deleted, Jim.');
      }, function(err) {
        console.log('error deleting');
        console.log(err);
      });
    }
  }
});
