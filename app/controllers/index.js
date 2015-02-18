import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['modified'],
  sortAscending: false,
  itemController: 'entry',
  offset: 0,
  prevPageDisabled: true,
  nextPage: function() {
    return this.get('offset') + 1;
  }.property('offset')
});

