import Ember from 'ember';
export function markdownToHtml(input) {
  if (Ember.isEmpty(input)) {
    return input;
  }
  var html = window.marked(input);
  return new Ember.Handlebars.SafeString(html);
}
export default Ember.Handlebars.makeBoundHelper(markdownToHtml);
