export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, oldPassword, newPassword } = req.body;

    // Log the data to see it in Vercel logs
    console.log('Email:', email);
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);

    // Respond back with a success message
    res.status(200).send('Data received successfully!');
  } else {
    // Handle unsupported methods
    res.status(405).send('Method Not Allowed');
  }
}