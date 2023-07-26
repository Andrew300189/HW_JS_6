const validationInput = document.getElementById('validation-input');

    validationInput.addEventListener('blur', (event) => {
      const inputValue = event.target.value;
      const requiredLength = Number(event.target.dataset.length);

      if (inputValue.length === requiredLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
      } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
      }
    });