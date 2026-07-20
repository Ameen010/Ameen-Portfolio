import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host');
  
  // Safe redirect: Redirect www to non-www only if host explicitly starts with www.
  // Warning: If you also set a redirect in Cloudflare from non-www to www, this will cause a redirect loop.
  // We recommend using Cloudflare Page Rules/Redirect Rules instead of server-side redirects for DNS mapping.
  if (host && host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const redirectUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${newHost}`);
    return NextResponse.redirect(redirectUrl, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml (sitemap)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)',
  ],
};
