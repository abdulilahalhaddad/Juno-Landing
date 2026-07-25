import Link from 'next/link';

export const metadata = {
  title: "You're in — Hello Julie",
};

// Palette lifted from the marketing bundle so the return trip doesn't feel
// like it landed on a different product.
const INK = '#221E1A';
const MUTED = '#574F47';
const PAPER = '#FBF8F4';
const ACCENT = '#B4552F';
const RULE = '#DED5C9';

const serif = 'Newsreader, Georgia, serif';

/**
 * Landing spot after the Stripe Payment Link.
 *
 * Stripe has already confirmed and receipted the payment on its own hosted
 * page, so this page deliberately makes no API call — it needs no secret key
 * and cannot fail. It exists so the customer comes back to something branded
 * instead of being stranded on Stripe's default confirmation.
 *
 * The `?checkout=early-bird` marker on the sign-up link tells the dashboard the
 * visitor arrived from checkout. It is a hint, not proof of payment — proving it
 * would need a Stripe webhook — so the dashboard records it with its provenance
 * rather than trusting it.
 */
export default function WelcomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: PAPER,
        color: INK,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 20px',
      }}
    >
      <div style={{ maxWidth: 560, width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              border: `2.5px solid ${ACCENT}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT }} />
          </div>
          <span
            style={{ fontFamily: serif, fontSize: 23, fontWeight: 500, letterSpacing: '-.01em' }}
          >
            Hello Julie
          </span>
        </div>

        <h1
          style={{
            fontFamily: serif,
            fontSize: 40,
            lineHeight: 1.15,
            fontWeight: 500,
            letterSpacing: '-.02em',
            margin: '0 0 20px',
          }}
        >
          You&rsquo;re in.
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: MUTED, margin: '0 0 16px' }}>
          Your early bird month is confirmed, and Stripe has emailed your receipt.
        </p>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: MUTED, margin: '0 0 36px' }}>
          Next, add your mum&rsquo;s details — her prescriptions and the time of day that suits
          her. We&rsquo;ll ask for her go-ahead before Julie ever rings.
        </p>

        <div
          style={{
            borderTop: `1px solid ${RULE}`,
            paddingTop: 28,
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <a
            href="/checkout/return"
            style={{
              background: ACCENT,
              color: PAPER,
              padding: '14px 26px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Continue to your dashboard
          </a>

          <a href="/login" style={{ fontSize: 16, color: MUTED, textDecoration: 'underline' }}>
            Log in
          </a>

          <Link
            href="/juno.html"
            style={{ fontSize: 16, color: MUTED, textDecoration: 'underline' }}
          >
            Back to the site
          </Link>
        </div>
      </div>
    </main>
  );
}
