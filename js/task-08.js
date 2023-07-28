const loginForm = document.querySelector('.login-form');

function onSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    alert('All fields must be filled.');
  } else {
    const formData = {
      email,
      password,
    };

    console.log(formData);
    loginForm.reset();
  }
}

loginForm.addEventListener('submit', onSubmit);