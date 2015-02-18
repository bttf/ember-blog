import Ember from 'ember';

var $ = Ember.$;

export default Ember.Component.extend({
  autoSaveEnabled: false,
  autoSaveTimeouts: [],

  autoSaveHandler: function() {
    var enabled = this.get('autoSaveEnabled');

    if (enabled) {
      var _this = this;
      $('.body-input').keyup(function() {
        pushAutoSaveTimeout(_this);
      });
    } else {
      $('.body-input').off('keyup');
    }
  }.observes('autoSaveEnabled'),

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

function pushAutoSaveTimeout(component) {
  var arr = component.get('autoSaveTimeouts');
  var saveFn = (function(_this) {
    return function() {
      _this.send('saveOnly', _this.get('entry'));
    };
  })(component);

  // pop existing
  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      window.clearTimeout(arr.pop());
    }
  }
  var timeoutId = window.setTimeout(saveFn, 2000);
  arr.push(timeoutId);
}
