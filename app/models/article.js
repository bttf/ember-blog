import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  tags: attr(),   // perhaps array 
  body: attr(),   // perhaps object
  url: attr('string'),
  type: attr('string'),
  createdAt: attr('date')
});
