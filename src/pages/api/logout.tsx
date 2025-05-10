import { NextApiRequest, NextApiResponse } from 'next';
import { deleteSession } from '../../lib/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  deleteSession(res);
  res.status(200).json({ message: 'Logged out' });
}