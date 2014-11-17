import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  tags: attr(),
  type: attr('string'),
  body: attr('string'),
  url: attr('string'),
  created: attr('date'),
  modified: attr('date'),
  isDraft: attr('boolean')

});
