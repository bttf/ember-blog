import Ember from 'ember';
import ENV from 'frontend/config/environment';

var limit = ENV.APP.limit;

export default Ember.Route.extend({
  model: function(params) {
    this.set('offset', parseInt(params.offset));

    if (parseInt(params.offset) === 0) {
      this.transitionTo('index');
    } else {
      return this.store.find('entry', {
        limit: limit,
        offset: this.get('offset') * limit
      });
    }
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    var offset = this.get('offset');

    controller.set('nextPage', offset + 1);
    controller.set('prevPage', offset - 1);

    var _this = this;
    Ember.$.ajax({
      url: ENV.APP.api_host + '/entries/length',
      type: 'GET',
      success: function(data) {
        controller.set('hasMore', data.length > (limit + (_this.get('offset') * limit)));
      }
    });
  }
});
