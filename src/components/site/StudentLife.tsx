import { motion } from "motion/react";
import { SectionHeading } from "@/components/site/Reveal";
import { EASE } from "@/lib/motion-presets";
import kids from "@/assets/life-kids.jpg";
import arts from "@/assets/life-arts.jpg";
import sports from "@/assets/facility-sports.jpg";
import library from "@/assets/facility-library.jpg";
import lab from "@/assets/facility-lab.jpg";
import hero from "@/assets/hero-campus.jpg";

const SHOTS = [
  { img: arts, alt: "Students performing a classical dance on the annual day stage", h: "h-72 sm:h-96" },
  { img: kids, alt: "Young children painting together in the art room", h: "h-56 sm:h-64" },
  { img: sports, alt: "Children playing football on the school field", h: "h-56 sm:h-72" },
  { img: library, alt: "Students reading quietly in the school library", h: "h-72 sm:h-80" },
  { img: lab, alt: "Students working with microscopes in the science lab", h: "h-56 sm:h-64" },
  { img: hero, alt: "Friends walking together across the campus", h: "h-64 sm:h-80" },
];

export function StudentLife() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Student Life"
          title="A day here is never quiet"
          description="Assemblies, house matches, rehearsals, science fairs and quiet reading corners — school life at IPS is full and varied."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
        >
          {SHOTS.map((s, i) => (
            <motion.figure
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl shadow-soft"
            >
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className={`w-full ${s.h} object-cover transition-transform duration-[900ms] group-hover:scale-105`}
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/80 to-transparent p-5 text-sm font-medium text-navy-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {s.alt}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
