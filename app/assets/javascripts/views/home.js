function aboutInfo () {
  var main = document.getElementById('main');
  var heading = '<h2>About Me</h2>';
  var aboutContent = '<p>I\'m a cool guy</p>';

  main.innerHTML = `<div class="modal"><div class="modal-content">${heading}${aboutContent}</div><div>`;

