import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userType = request.cookies.get('userType')?.value;
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value;

  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  // Redirect to login if trying to access protected routes without authentication
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!isAuthenticated || userType !== 'admin') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  if (pathname.startsWith('/seller') && pathname !== '/seller/login') {
    if (!isAuthenticated || userType !== 'seller') {
      return NextResponse.redirect(new URL('/seller/login', request.url));
    }
  }

  // Redirect authenticated users away from login pages
  if (isAuthenticated) {
    if (pathname === '/admin/login' && userType === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    if (pathname === '/seller/login' && userType === 'seller') {
      return NextResponse.redirect(new URL('/seller/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/seller/:path*', '/login'],
}; 