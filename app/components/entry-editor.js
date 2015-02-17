import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveOnly: function(entry) {
      entry.set('tags', parseTags(entry.get('tags')));

      this.sendAction('saveEntry', entry);
    },

    saveAndSubmit: function(entry) {
      entry.set('tags', parseTags(entry.get('tags')));

      this.sendAction('saveEntry', entry, 'entry');
    }
  }
});

function parseTags(tags) {
  if (typeof tags === 'string') {
    return tags.split(',');
  }
}
