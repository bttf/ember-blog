import Ember from 'ember';

function calendarTime(value) {
  if (Ember.isEmpty(value)) {
    return value;
  }

  var time = window.moment(value).calendar();

  return new Ember.Handlebars.SafeString(time);

}

export {
 calendarTime 
};

export default Ember.Handlebars.makeBoundHelper(calendarTime);
