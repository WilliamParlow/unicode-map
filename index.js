const unicodes = {
  'á': '\\u00e1',
  'à': '\\u00e0',
  'â': '\\u00e2',
  'ã': '\\u00e3',
  'ä': '\\u00e4',
  'Á': '\\u00c1',
  'À': '\\u00c0',
  'Â': '\\u00c2',
  'Ã': '\\u00c3',
  'Ä': '\\u00c4',
  'é': '\\u00e9',
  'è': '\\u00e8',
  'ê': '\\u00ea',
  'ê': '\\u00ea',
  'É': '\\u00c9',
  'È': '\\u00c8',
  'Ê': '\\u00ca',
  'Ë': '\\u00cb',
  'í': '\\u00ed',
  'ì': '\\u00ec',
  'î': '\\u00ee',
  'ï': '\\u00ef',
  'Í': '\\u00cd',
  'Ì': '\\u00cc',
  'Î': '\\u00ce',
  'Ï': '\\u00cf',
  'ó': '\\u00f3',
  'ò': '\\u00f2',
  'ô': '\\u00f4',
  'õ': '\\u00f5',
  'ö': '\\u00f6',
  'Ó': '\\u00d3',
  'Ò': '\\u00d2',
  'Ô': '\\u00d4',
  'Õ': '\\u00d5',
  'Ö': '\\u00d6',
  'ú': '\\u00fa',
  'ù': '\\u00f9',
  'û': '\\u00fb',
  'ü': '\\u00fc',
  'Ú': '\\u00da',
  'Ù': '\\u00d9',
  'Û': '\\u00db',
  'ç': '\\u00e7',
  'Ç': '\\u00c7',
  'ñ': '\\u00f1',
  'Ñ': '\\u00d1',
  '&': '\\u0026',
  '\'': '\\u0027',
  '²': '\\u00B2'
}

window.onload = () => {
  document.querySelectorAll('.unicode-code').forEach(el => {
    el.onclick = e => {
      const input = e.target;

      input.select();
      input.setSelectionRange(0, 6);

      document.execCommand('copy');
    }
  });

  document.querySelector('#original-text').onkeyup = e => {
    const val = e.target.value.split('');
    let transformedText = '';

    val.forEach(v => transformedText = transformedText.concat(unicodes[v] || v));

    document.querySelector('#transformed-text').textContent = transformedText;
  }
}
