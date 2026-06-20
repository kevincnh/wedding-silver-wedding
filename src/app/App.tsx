import { useState } from "react";
import { X } from "lucide-react";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1761674291544-bdfb5216a40a?w=800&h=1100&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1761674291544-bdfb5216a40a?w=500&h=650&fit=crop&auto=format",
    alt: "Elderly couple holding hands in a sunlit garden",
    caption: "Still hand in hand, after all these years.",
    aspect: "portrait",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1514415008039-efa173293080?w=1000&h=700&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1514415008039-efa173293080?w=600&h=420&fit=crop&auto=format",
    alt: "Man kissing woman on the cheek beside a body of water",
    caption: "Every kiss still feels like the first.",
    aspect: "landscape",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1739932907333-e518dc4fb674?w=900&h=700&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1739932907333-e518dc4fb674?w=560&h=420&fit=crop&auto=format",
    alt: "Couple standing near a tree, smiling",
    caption: "Rooted together, growing toward the light.",
    aspect: "landscape",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1625690988276-0a7b0cdf3d5d?w=700&h=1050&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1625690988276-0a7b0cdf3d5d?w=420&h=620&fit=crop&auto=format",
    alt: "Man in white shirt hugging woman in white dress",
    caption: "In every embrace, a thousand memories.",
    aspect: "portrait",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1760722531515-a2b2d5013879?w=900&h=600&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1760722531515-a2b2d5013879?w=560&h=370&fit=crop&auto=format",
    alt: "Elderly couple walking together outdoors with joy",
    caption: "Adventure is sweeter when shared.",
    aspect: "landscape",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1761682815710-8d584fec0e51?w=700&h=1000&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1761682815710-8d584fec0e51?w=420&h=600&fit=crop&auto=format",
    alt: "Smiling couple in a timeless portrait",
    caption: "Joy written in the lines of a lifetime.",
    aspect: "portrait",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1625690988910-fedcd2be5e2e?w=900&h=700&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1625690988910-fedcd2be5e2e?w=560&h=420&fit=crop&auto=format",
    alt: "Man kissing woman tenderly during celebration",
    caption: "Twenty-five years, and love only deepens.",
    aspect: "landscape",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1672640770474-e1d8a28fd0d2?w=700&h=1050&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1672640770474-e1d8a28fd0d2?w=420&h=630&fit=crop&auto=format",
    alt: "A tender moment between two people who love each other deeply",
    caption: "In quiet moments, love speaks loudest.",
    aspect: "portrait",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1739932905664-b7b4c0056f21?w=900&h=650&fit=crop&auto=format",
    thumb: "https://images.unsplash.com/photo-1739932905664-b7b4c0056f21?w=560&h=400&fit=crop&auto=format",
    alt: "Couple together near a tree in golden light",
    caption: "Where you are is where I want to be.",
    aspect: "landscape",
  },
];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div className="h-px w-12 bg-accent opacity-80" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent opacity-80">
        <path d="M12 2 L13.5 9 L20 9 L14.5 13 L16.5 20 L12 16 L7.5 20 L9.5 13 L4 9 L10.5 9 Z" fill="currentColor" />
      </svg>
      <div className="h-px w-12 bg-accent opacity-80" />
    </div>
  );
}

function SilverBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 border border-accent/60 rounded-full text-accent text-sm font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Unicase', serif", letterSpacing: "0.2em" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 L13.5 9 L20 9 L14.5 13 L16.5 20 L12 16 L7.5 20 L9.5 13 L4 9 L10.5 9 Z" />
      </svg>
      Silver Anniversary
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 L13.5 9 L20 9 L14.5 13 L16.5 20 L12 16 L7.5 20 L9.5 13 L4 9 L10.5 9 Z" />
      </svg>
    </div>
  );
}

function PhotoCard({ photo, onClick }: { photo: typeof photos[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full overflow-hidden bg-muted text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{ borderRadius: "2px" }}
    >
      <div
        className={`relative overflow-hidden ${photo.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
      >
        <img
          src={photo.thumb}
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full px-4 pb-4 pt-12 bg-gradient-to-t from-foreground/70 to-transparent">
            <p className="text-primary-foreground text-sm italic leading-snug" style={{ fontFamily: "'Lora', serif" }}>
              {photo.caption}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Lightbox({ photo, onClose, onPrev, onNext }: { photo: typeof photos[0]; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground text-4xl font-light transition-colors px-4 py-2"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/60 hover:text-primary-foreground text-4xl font-light transition-colors px-4 py-2"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        ›
      </button>
      <div
        className="max-w-3xl max-h-[88vh] mx-16 flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.url}
          alt={photo.alt}
          className="max-w-full max-h-[78vh] object-contain"
          style={{ borderRadius: "2px" }}
        />
        <p className="text-primary-foreground/80 text-sm italic text-center" style={{ fontFamily: "'Lora', serif" }}>
          {photo.caption}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const openPhoto = (id: number) => setActivePhoto(id);
  const closePhoto = () => setActivePhoto(null);
  const prevPhoto = () => {
    if (activePhoto === null) return;
    const idx = photos.findIndex((p) => p.id === activePhoto);
    setActivePhoto(photos[(idx - 1 + photos.length) % photos.length].id);
  };
  const nextPhoto = () => {
    if (activePhoto === null) return;
    const idx = photos.findIndex((p) => p.id === activePhoto);
    setActivePhoto(photos[(idx + 1) % photos.length].id);
  };

  const currentPhoto = photos.find((p) => p.id === activePhoto) ?? null;

  // Split photos into 3 columns for masonry layout
  const col1 = [photos[0], photos[3], photos[6]];
  const col2 = [photos[1], photos[4], photos[7]];
  const col3 = [photos[2], photos[5], photos[8]];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Lora', serif" }}>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="relative h-[70vh] min-h-[520px] flex flex-col items-center justify-center text-center px-6"
          style={{
            background: "linear-gradient(160deg, #e8ddd0 0%, #faf6f0 45%, #ede4d8 100%)",
          }}
        >
          {/* Decorative background text */}
          <span
            className="absolute inset-0 flex items-center justify-center text-accent/5 select-none pointer-events-none"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(80px, 18vw, 220px)", fontWeight: 600, letterSpacing: "-0.02em" }}
            aria-hidden="true"
          >
            XXV
          </span>

          <div className="relative z-10 flex flex-col items-center gap-4">
            <SilverBadge />
            <h1
              className="text-foreground leading-tight mt-2"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem, 6vw, 5rem)", fontWeight: 400, letterSpacing: "-0.01em" }}
            >
              Eleanor &amp; George
            </h1>
            <Ornament />
            <p
              className="text-muted-foreground max-w-md text-lg leading-relaxed italic"
              style={{ fontFamily: "'Lora', serif", fontWeight: 400 }}
            >
              Twenty-five years of laughter, tears, quiet mornings,<br className="hidden sm:inline" /> and the profound grace of choosing each other — every day.
            </p>
            <p className="text-accent text-base font-semibold tracking-widest uppercase mt-1" style={{ fontFamily: "'Cormorant Unicase', serif" }}>
              Married · June 19, 2000
            </p>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        </div>
      </header>

      {/* Intro quote */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <Ornament />
        <blockquote
          className="mt-6 text-foreground/80 text-xl leading-relaxed italic"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}
        >
          "Grow old along with me — the best is yet to be."
        </blockquote>
        <p className="text-muted-foreground text-sm mt-3 tracking-wider" style={{ fontFamily: "'Cormorant Unicase', serif" }}>
          — Robert Browning
        </p>
        <div className="mt-8 text-muted-foreground text-base leading-7 max-w-prose mx-auto" style={{ fontFamily: "'Lora', serif" }}>
          <p>
            These photographs trace the story of two people who found in each other not merely a partner, but a home.
            Through seasons and years, through celebration and stillness, their love has only grown more luminous.
          </p>
          <p className="mt-4">
            We gather these moments — candid glances, gentle touches, and radiant smiles — as a testament to what endures.
            A silver wedding is not just a milestone. It is a portrait of devotion made visible.
          </p>
        </div>
        <Ornament />
      </section>

      {/* Gallery */}
      <section className="px-4 sm:px-8 pb-20 max-w-6xl mx-auto">
        <h2
          className="text-center text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-10"
          style={{ fontFamily: "'Cormorant Unicase', serif" }}
        >
          A life in portraits
        </h2>

        {/* Masonry 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            {col1.map((p) => (
              <PhotoCard key={p.id} photo={p} onClick={() => openPhoto(p.id)} />
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 sm:mt-10">
            {col2.map((p) => (
              <PhotoCard key={p.id} photo={p} onClick={() => openPhoto(p.id)} />
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 sm:mt-5">
            {col3.map((p) => (
              <PhotoCard key={p.id} photo={p} onClick={() => openPhoto(p.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing dedication */}
      <footer
        className="py-20 text-center px-6"
        style={{ background: "linear-gradient(180deg, #faf6f0 0%, #e8ddd0 100%)" }}
      >
        <Ornament />
        <p
          className="mt-6 text-foreground text-2xl italic"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
        >
          Here is to the next twenty-five.
        </p>
        <p className="text-accent text-base font-semibold mt-3 tracking-widest uppercase" style={{ fontFamily: "'Cormorant Unicase', serif" }}>
          With all our love
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-accent/40" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
          </svg>
          <div className="h-px w-16 bg-accent/40" />
        </div>
        <p className="text-accent/70 text-sm mt-10 tracking-widest font-medium" style={{ fontFamily: "'Cormorant Unicase', serif" }}>
          Eleanor &amp; George · 2000 — 2025
        </p>
      </footer>

      {/* Lightbox */}
      {currentPhoto && (
        <Lightbox
          photo={currentPhoto}
          onClose={closePhoto}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </div>
  );
}
