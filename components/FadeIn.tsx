export default function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{ animation: `fadein 0.4s ease-out ${delay}s both` }}
    >
      {children}
    </div>
  );
}
