/**
 * Where the Juno dashboard lives.
 *
 * Set NEXT_PUBLIC_DASHBOARD_URL in the Vercel project. It is the single place
 * the dashboard's domain appears — `public/juno.html` is a static bundle that
 * cannot read environment variables, so it links to this app's own /login and
 * /signup routes and lets them do the forwarding.
 */
export const DASHBOARD_URL = (
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? 'https://juno-dashboard.vercel.app'
).replace(/\/$/, '');
