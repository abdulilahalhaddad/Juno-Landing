/**
 * Where the Juno dashboard lives.
 *
 * The default is the real deployed dashboard, verified live, so this repo needs
 * no environment variable to work. Set NEXT_PUBLIC_DASHBOARD_URL to override —
 * for a preview deploy, or once a custom domain exists.
 *
 * The default is NOT a guess. `juno-dashboard.vercel.app` was the obvious name
 * and it belongs to an unrelated project: the .vercel.app namespace is global
 * and first-come, so a plausible-looking placeholder here would have sent
 * paying customers to a stranger's site.
 *
 * This is the single place the dashboard's domain appears. `public/juno.html` is
 * a static bundle that cannot read environment variables, so it links to this
 * app's own /login and /signup routes and lets them forward.
 */
export const DASHBOARD_URL = (
  process.env.NEXT_PUBLIC_DASHBOARD_URL ??
  'https://juno-dashboard-redwood-medtech.vercel.app'
).replace(/\/$/, '');
