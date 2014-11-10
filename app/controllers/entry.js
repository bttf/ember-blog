import Ember from 'ember';

export default Ember.ObjectController.extend({
  isText: function() {
    if (this.get('type') === 'text') {
      return true;
    }
    return false;
  },
  isVid: function() {
    if (this.get('type') === 'video') {
      return true;
    }
    return false;
  }
});
