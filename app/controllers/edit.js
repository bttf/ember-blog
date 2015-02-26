import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveAndSubmit: function(entry, route) {
      var _this = this;
      entry.save().then(function(entry) {
        _this.set('saved', entry.get('modified'));
        if (!Ember.isEmpty(route)) {
          _this.transitionToRoute(route, entry);
        }
      }, function(err) {
        _this.set('error', err);
      });
    }
  }
});

