import Ember from 'ember';

var hljs = window.hljs;

export function markdownToHtml(input) {
  if (Ember.isEmpty(input)) {
    return input;
  }
  window.marked.setOptions({
    highlight: function(code, lang) {
      if (lang) {
        if (lang === 'ignore' || !hljs.getLanguage(lang)) {
          return code;
        } else {
          return hljs.highlight(lang, code).value;
        }
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });
  var html = window.marked(input);
  return new Ember.Handlebars.SafeString(html);
}
export default Ember.Handlebars.makeBoundHelper(markdownToHtml);
