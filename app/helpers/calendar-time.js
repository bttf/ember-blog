import Ember from 'ember';

function calendarTime(value) {
  if (!value || value === "") {
    return value;
  }

  var time = moment(value).calendar();

  return new Ember.Handlebars.SafeString(time);

}

export {
 calendarTime 
};

export default Ember.Handlebars.makeBoundHelper(calendarTime);
