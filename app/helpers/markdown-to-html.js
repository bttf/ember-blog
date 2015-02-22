import Ember from 'ember';
export function markdownToHtml(input) {
  if (Ember.isEmpty(input)) {
    return input;
  }
  window.marked.setOptions({
    highlight: function(code, lang) {
      if (lang) {
        if (lang === 'ignore') {
          return code;
        } else {
          return window.hljs.highlight(lang, code).value;
        }
      } else {
        return window.hljs.highlightAuto(code).value;
      }
    }
  });
  var html = window.marked(input);
  return new Ember.Handlebars.SafeString(html);
}
export default Ember.Handlebars.makeBoundHelper(markdownToHtml);
