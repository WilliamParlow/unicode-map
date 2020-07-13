window.onload = () => {
  document.querySelectorAll('.unicode-code').forEach(el => {
    el.onclick = e => {
      const input = e.target;

      input.select();
      input.setSelectionRange(0, 6);

      document.execCommand('copy');
    }
  });
}