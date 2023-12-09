const loginForm = document.getElementById('loginForm');
const signupLink = document.getElementById('signupLink');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  console.log('Login:', { email, password });
  await bridge.signin(email, password);

});

signupLink.addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = './signup.html';
});