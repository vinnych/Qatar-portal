import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Legal Disclaimer | Arabia Khaleej",
  description: "Official legal disclaimers for the Arabia Khaleej community guide.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div style={{ maxWidth: "800px" }}>
      <h1>Legal Disclaimer</h1>
      <p>
        Arabia Khaleej is an independent, unofficial hobbyist project. It is not affiliated 
        with any government body. All information is provided "as-is" for guidance only.
      </p>
    </div>
  );
}
