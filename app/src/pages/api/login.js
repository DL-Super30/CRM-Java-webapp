export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Add your logic to handle the login here
      // For example, you might query a database or an external service
  
      // Respond with a success or error message
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }