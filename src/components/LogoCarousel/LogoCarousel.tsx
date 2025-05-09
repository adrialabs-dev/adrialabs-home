'use client'

interface LogoCarouselProps {
  title: string;
  logos: string[]; // Array of logo image URLs
  duration?: number; // duration in seconds for one full loop
}

export default function LogoCarousel({
  title,
  logos,
  duration = 10,
}: LogoCarouselProps) {
  // Duplicate logos to create seamless infinite scroll
  const duplicated = [...logos, ...logos];

  return (
    <section className="w-full py-8 max-w-[485px] mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
      <div
        className="overflow-hidden"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationDuration: `${duration}s` }}
        >
          {duplicated.map((src, idx) => (
            <div key={idx} className="inline-block mx-8 flex-shrink-0  opacity-75">
              <img
                src={src}
                alt={`logo-${idx}`}
                className={`object-contain w-[100px] ${
                  src.includes("t_410qo8") ? "relative top-[10px]" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}