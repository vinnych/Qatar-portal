import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy | Arabia Khaleej",
  description: "Our privacy policy for the Arabia Khaleej community guide.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "800px" }}>
      <h1>Privacy Policy</h1>
      <p>
        Arabia Khaleej is a privacy-first platform. We do not collect, store, or share 
        any personally identifiable information (PII).
      </p>
      <p>
        The site operates without user accounts or persistent cookies, 
        ensuring full anonymity for our visitors.
      </p>
    </div>
  );
}
