import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { DASHBOARD_URL } from '@/lib/dashboard';

/**
 * Forwards to the dashboard's sign-up, preserving `?checkout=early-bird`.
 *
 * That marker tells the dashboard the visitor arrived from the Stripe Payment
 * Link. It is a hint, not proof of payment — proving it needs a Stripe webhook —
 * so the dashboard records it with its provenance rather than trusting it.
 */
export function GET(request: NextRequest) {
  const checkout = request.nextUrl.searchParams.get('checkout');
  const suffix = checkout === 'early-bird' ? '?checkout=early-bird' : '';
  redirect(`${DASHBOARD_URL}/signup${suffix}`);
}
