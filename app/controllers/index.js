import Ember from 'ember';
import ENV from '../config/environment';

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

