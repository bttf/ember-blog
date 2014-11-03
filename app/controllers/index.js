import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['modified'],
  sortAscending: false,
  actions: {
    delete: function(entry) {
      entry.deleteRecord();
      entry.save().then(
        function() {
          console.log('He\'s deleted, Jim.');
        }, function(err) {
          // entry.rollback() ? it doesn't WORK!
          console.log('error deleting');
        }
      );
    }
  }
});

