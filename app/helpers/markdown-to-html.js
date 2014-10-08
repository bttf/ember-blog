import Ember from 'ember';

function markdownToHtml(value) {
  var html = markdown.toHTML(value);

  console.log('debug: ' + html);
  console.log('debug: ' + typeof html);

  return new Handlebars.SafeString(html);

}

export {
  markdownToHtml
};

export default Ember.Handlebars.makeBoundHelper(markdownToHtml);
