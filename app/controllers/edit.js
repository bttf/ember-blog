import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      if (typeof this.get('model.tags') === 'string')
        this.set('model.tags', this.get('model.tags').split(','));

      var controller = this;
      this.get('model').save().then(function(res) {
        controller.transitionToRoute('entry', res.id);

      });
    }
  }
});

