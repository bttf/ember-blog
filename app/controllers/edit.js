import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    toggleDraft: function() {
      this.set('model.isDraft', !this.get('model.isDraft'));
    },
    tempSave: function() {
      if (typeof this.get('model.tags') === 'string') {
        this.set('model.tags', this.get('model.tags').split(','));
      }
      var controller = this;
      this.get('model').save().then(function(res) {
        controller.set('model.saved', true);
        controller.set('model.lastSave', res._data.modified);
      }, function(err) {
        controller.set('model.error', true);
        console.log(err);
      });
    },
    save: function() {
      if (typeof this.get('model.tags') === 'string') {
        this.set('model.tags', this.get('model.tags').split(','));
      }

      var controller = this;
      this.get('model').save().then(function(res) {
        controller.transitionToRoute('entry', res.id);
      }, function(err) {
        controller.get('model').rollback();
        controller.set('model.error', true);
        console.log(err);
      });
    }
  }
});

