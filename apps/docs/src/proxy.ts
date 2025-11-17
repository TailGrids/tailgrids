import { NextResponse } from 'next/server';

export function proxy(request: Request) {
  const response = NextResponse.next();

  // Preserve original host for canonical URLs
  const forwardedHost = request.headers.get('x-forwarded-host');
  if (forwardedHost) {
    response.headers.set('x-forwarded-host', forwardedHost);
  }

  return response;
}
