import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('tagName', this.get('tagName'));
    controller.set('model', model);
  },

  model: function(params) {
    this.set('tagName', params.tag_name);
    return this.get('store').find('entry').then(function(entries) {
      return entries.filter(function(entry) {
        return entry.get('tags').indexOf(params.tag_name) !== -1;
      });
    });
  }
});
