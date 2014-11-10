import Ember from 'ember';

function markdownToHtml(value) {
  if (!value || value === "")
    return value;

  var html = marked(value);

  return new Ember.Handlebars.SafeString(html);

}

export {
  markdownToHtml
};

export default Ember.Handlebars.makeBoundHelper(markdownToHtml);
