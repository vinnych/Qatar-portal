import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
      {/* Visual Accent */}
      <div className="mb-8 animate-in fade-in zoom-in duration-1000 slide-in-from-top-12">
        <div className="w-24 h-1 bg-brand-gold/20 mx-auto rounded-full blur-sm" />
      </div>

      {/* Main Title Section */}
      <div className="relative mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
        <div className="relative w-72 sm:w-[700px] h-40 sm:h-80 mx-auto">
          <Image 
            src="/logo.png" 
            alt="Arabia Khaleej Logo" 
            fill 
            className="object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.2)] brightness-110 contrast-110"
            priority
          />
        </div>
        
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent mx-auto mt-8" />
      </div>

      {/* Description */}
      <div className="max-w-2xl glass p-8 rounded-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 fill-mode-both">
        <p className="text-lg sm:text-xl text-brand-champagne/70 font-medium leading-relaxed italic serif">
          "Redefining the standard of luxury and community across the GCC region."
        </p>
        <p className="mt-4 text-xs tracking-widest uppercase font-bold text-brand-gold/50">
          Premier Digital Experience Arriving Soon
        </p>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-gold/5 blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}
