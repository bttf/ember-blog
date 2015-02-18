import Ember from "ember";
import ENV from '../config/environment';

var limit = ENV.APP.limit;

export default Ember.Route.extend({
  model: function() {
    return this.store.find('entry', {
      limit: limit
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    Ember.$.ajax({
      url: ENV.APP.api_host + '/entries/length',
      type: 'GET',
      success: function(data) {
        controller.set('hasMore', data.length > limit);
      }
    });
  }
});

