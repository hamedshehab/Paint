function paintDiv(div) {
    div.style.backgroundColor = currentColor;
  }

  function setColor(color) {
    currentColor = color;
  }

  function resetColors() {
    const divs = document.querySelectorAll('.grid > div');
    divs.forEach(function(div) {
      div.style.backgroundColor = '#ccc';
    });
  }