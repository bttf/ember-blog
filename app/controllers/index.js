import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    delete: function(entry) {
      this.store.find('entry', entry.id).then(function(entry) {
        entry.destroyRecord();
        console.log('He\'s deleted, Jim.');
      });
    }
  }
});

