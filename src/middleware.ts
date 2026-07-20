import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'experimental-edge';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  
  if (host && host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const redirectUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${newHost}`);
    return NextResponse.redirect(redirectUrl, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)',
  ],
};
