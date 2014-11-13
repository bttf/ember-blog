import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['modified'],
  sortAscending: false,
  itemController: 'entry',
  actions: {
    delete: function(entry) {
      entry.deleteRecord();
      entry.save().then(
        function() {
          console.log('He\'s deleted, Jim.');
        }, function(err) {
          console.log('error deleting');
          console.log(err);
        }
      );
    }
  }
});

