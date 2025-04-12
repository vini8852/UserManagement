import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const publicRoutes = ['/login'];
const protectedRoutes = ['/'];

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // ✅ Skip Next.js internal files and static assets
  const isStaticFile = path.startsWith('/_next') || path.startsWith('/favicon.ico') || path.startsWith('/static');

  if (isStaticFile) {
    return NextResponse.next();
  }

  const cookiesession = cookies().get('session')?.value;

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 🔐 If trying to access a protected route without a session
  if (isProtectedRoute && !cookiesession) {
    return NextResponse.redirect(new URL('/Login', req.url));
  }

  return NextResponse.next();
}
