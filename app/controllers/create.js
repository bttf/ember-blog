import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      this.set('model.tags', this.get('model.tags').split(','));
      this.get('model').save();

    }
  }
});

