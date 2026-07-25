import { redirect } from 'next/navigation';
import { DASHBOARD_URL } from '@/lib/dashboard';

/**
 * Forwards to the dashboard's checkout return, which decides what to do.
 *
 * Signed in, they signed up and then paid, so it sets their plan and lets them
 * in. Signed out, they paid first, so it sends them to sign up. Either way the
 * decision needs their session, which only the dashboard's origin can see —
 * this route exists purely so /welcome can link somewhere same-origin instead of
 * embedding a domain.
 */
export function GET() {
  redirect(`${DASHBOARD_URL}/checkout/return`);
}
