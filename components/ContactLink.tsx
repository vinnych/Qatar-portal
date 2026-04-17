"use client";

export default function ContactLink() {
  const reveal = () => {
    const parts = ["connect", "arabiakhaleej", "com"];
    window.location.href = `mailto:${parts[0]}@${parts[1]}.${parts[2]}`;
  };

  return (
    <button
      onClick={reveal}
      className="hover:text-brand-gold transition-colors cursor-pointer"
      aria-label="Contact us"
    >
      Connect
    </button>
  );
}
