var encodeMap = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;',
  '\n': '&#10;',
  '\t': '&#9;'
}

var reg = /(?:<|>|"|&|\n|\t)/g;

function encodeHtml(htmlStr) {
  return htmlStr.replace(reg, function(match) {
    return encodeMap[match]
  });
}

function insertCodeAndPreview(idPrefix) {
  var tpl = document.querySelector('#' + idPrefix + '-tpl');
  var code = document.querySelector('#' + idPrefix + '-code');
  var preview = document.querySelector('#' + idPrefix + '-preview');

  if (tpl) {
    var htmlStr = tpl.innerHTML;
    if (code) {
      code.innerHTML = encodeHtml(htmlStr);
    }
    if (preview) {
      preview.innerHTML = htmlStr;
    }
  }
}
