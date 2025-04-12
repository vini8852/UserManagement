import type { NextApiRequest, NextApiResponse } from 'next';
import { createSession } from '../../lib/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;


  if (email === 'admin@gmail.com' && password === '1234') {
   
    createSession(res, email);

    return res.status(200).json({ success: true, message: 'Login successful' });
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials' });
}
