import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var results = this.store.find('entry').then(
      function (data) {
      //console.log('RESULTS: ' + typeof data);
      console.dir(data);
      return data;
      }
    );
    return results;
    //return this.store.find('entry');

  },

});

