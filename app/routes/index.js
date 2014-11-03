import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find('entry');
  },
  setupController: function(controller, entries) {
    controller.set('model', entries);
  }
});

