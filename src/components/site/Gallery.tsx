import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/site/Reveal";
import { EASE } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";
import hero from "@/assets/hero-campus.jpg";
import aerial from "@/assets/campus-aerial.jpg";
import classroom from "@/assets/about-classroom.jpg";
import lab from "@/assets/facility-lab.jpg";
import library from "@/assets/facility-library.jpg";
import computer from "@/assets/facility-computer.jpg";
import sports from "@/assets/facility-sports.jpg";
import arts from "@/assets/life-arts.jpg";
import kids from "@/assets/life-kids.jpg";
import trophies from "@/assets/achievements.jpg";

type Category = "Campus" | "Events" | "Sports" | "Activities" | "Hostel" | "Arts";

const IMAGES: { src: string; alt: string; cat: Category }[] = [
  { src: hero, alt: "Students walking past the main school building", cat: "Campus" },
  { src: aerial, alt: "Aerial view of the campus and playing fields", cat: "Campus" },
  { src: classroom, alt: "A lesson in progress in a smart classroom", cat: "Activities" },
  { src: lab, alt: "Science lab practical session", cat: "Activities" },
  { src: library, alt: "Reading session in the school library", cat: "Hostel" },
  { src: computer, alt: "Students in the computer laboratory", cat: "Activities" },
  { src: sports, alt: "Football practice on the school ground", cat: "Sports" },
  { src: arts, alt: "Dance performance during the annual function", cat: "Arts" },
  { src: kids, alt: "Primary students in an art and craft class", cat: "Arts" },
  { src: trophies, alt: "Prize distribution at a school assembly", cat: "Events" },
];

const CATEGORIES = ["All", "Campus", "Events", "Sports", "Activities", "Hostel", "Arts"] as const;

export function Gallery() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shown = useMemo(
    () => IMAGES.filter((i) => active === "All" || i.cat === active),
    [active],
  );

  return (
    <section id="gallery" className="py-20 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from around the school"
          description="A glimpse of campus, classrooms, competitions and celebrations through the year."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === c ? "text-primary-foreground" : "text-foreground hover:bg-secondary",
              )}
            >
              {active === c ? (
                <motion.span
                  layoutId="gallery-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              ) : null}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {shown.map((img, i) => (
              <motion.button
                key={img.alt}
                layout
                type="button"
                onClick={() => setLightbox(IMAGES.indexOf(img))}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.03 }}
                className="group block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-navy-deep/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              src={IMAGES[lightbox]!.src}
              alt={IMAGES[lightbox]!.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain shadow-lift"
            />
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-navy-foreground/30 text-navy-foreground transition-colors hover:bg-navy-foreground/15"
            >
              <X className="size-5" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
