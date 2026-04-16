import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Terms of Service | Arabia Khaleej",
  description: "Official terms of service for the Arabia Khaleej community guide.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "800px" }}>
      <h1>Terms of Service</h1>
      <p>
        By using Arabia Khaleej, you agree to these terms. All content is for 
        informational purposes only and should be verified with official sources.
      </p>
    </div>
  );
}
