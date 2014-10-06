import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'edit',

  model: function() {
    return this.store.createRecord('entry');

  }
});

