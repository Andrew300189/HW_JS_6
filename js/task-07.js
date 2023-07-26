const fontSizeControl = document.getElementById('font-size-control');
    const textElement = document.getElementById('text');

    fontSizeControl.addEventListener('input', (event) => {
      const fontSize = event.target.value;
      textElement.style.fontSize = `${fontSize}px`;
    });