import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Arabia Khaleej | Independent Community Guide",
  description: "Learn more about the Arabia Khaleej independent hobby project.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "800px" }}>
      <h1>About Arabia Khaleej</h1>
      <p>
        Arabia Khaleej is an independent, unofficial hobbyist project dedicated to providing 
        static informational guides for the GCC region.
      </p>
      <p>
        This platform is built on the principles of speed and simplicity, 
        serving as a bridge to official state sources.
      </p>
    </div>
  );
}
