import { redirect } from 'next/navigation';
import { DASHBOARD_URL } from '@/lib/dashboard';

/**
 * Forwards to the dashboard's login.
 *
 * Exists so the marketing bundle can link to a same-origin /login and the
 * dashboard's domain stays configurable in one env var rather than being baked
 * into a 1 MB static file.
 */
export function GET() {
  redirect(`${DASHBOARD_URL}/login`);
}
