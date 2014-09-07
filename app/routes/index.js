import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return entities;
  }
});

var entities = [
  {
    isText: true,
    title: 'Lost, Lost, Lost by Jonas Mekas',
    tags: ['film', 'jonas mekas', 'diary film'],
    timestamp: (new Date()).toString()
  },
  {
    isFilm: true,
    title: 'For a Few Buttcheeks More',
    tags: ['film', 'sergio leone', 'spaghetti western'],
    timestamp: (new Date()).toString()
  }
];

