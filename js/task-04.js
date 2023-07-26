const counterValueElement = document.getElementById('value');
    let counterValue = 0;

    const decrementButton = document.querySelector('[data-action="decrement"]');
    const incrementButton = document.querySelector('[data-action="increment"]');

    decrementButton.addEventListener('click', () => {
      counterValue--;
      counterValueElement.textContent = counterValue;
    });

    incrementButton.addEventListener('click', () => {
      counterValue++;
      counterValueElement.textContent = counterValue;
    });