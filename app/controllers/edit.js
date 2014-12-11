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
        controller.set('saved', res._data.modified);
      }, function(err) {
        controller.set('error', err);
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
        controller.set('error', err);
        console.log(err);
      });
    }
  }
});

