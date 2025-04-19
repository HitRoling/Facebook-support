export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, oldPassword, newPassword } = req.body;

    console.log('Email:', email);
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);

    res.status(200).send('Data received');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}