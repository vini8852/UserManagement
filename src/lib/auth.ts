import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';

const JWT_SECRET = process.env.JWT_SECRET || 'SECRET_KEY_2233';

export function createSession(res: NextApiResponse, email: string) {
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
  console.log("flag1",token);
  res.setHeader('Set-Cookie',
    cookie.serialize('session', token,
    {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        path: '/'
    }))
   
}

export function verifySession(req: NextApiRequest) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const session = cookies.session;

  if (!session) return null;

  try {
    const payload = jwt.verify(session, JWT_SECRET);
    return payload;
  } catch {
    return null;
  }
}

export function deleteSession(res: NextApiResponse) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0),
      path: '/',
      sameSite: 'lax',
    })
  )
}
