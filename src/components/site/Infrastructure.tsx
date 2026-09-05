import { motion } from "motion/react";
import { SectionHeading } from "@/components/site/Reveal";
import { EASE } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";
import lab from "@/assets/facility-lab.jpg";
import library from "@/assets/facility-library.jpg";
import sports from "@/assets/facility-sports.jpg";
import computer from "@/assets/facility-computer.jpg";
import classroom from "@/assets/about-classroom.jpg";
import aerial from "@/assets/campus-aerial.jpg";
import arts from "@/assets/life-arts.jpg";
import kids from "@/assets/life-kids.jpg";

const FACILITIES = [
  { title: "Smart Classrooms", text: "Digital boards and airy, light-filled rooms.", img: classroom, span: "sm:col-span-2 sm:row-span-2" },
  { title: "Science Labs", text: "Physics, chemistry and biology labs.", img: lab },
  { title: "Computer Lab", text: "Modern workstations for coding and design.", img: computer },
  { title: "Library", text: "Reading room with a growing collection.", img: library, span: "sm:col-span-2" },
  { title: "Sports Facilities", text: "Courts, track and coached team practice.", img: sports },
  { title: "Playground", text: "Safe, age-appropriate play zones.", img: aerial },
  { title: "Hostel & Mess", text: "Supervised residence with nutritious dining.", img: kids },
  { title: "Art & Music Rooms", text: "Dedicated studios for creative practice.", img: arts },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-secondary/40 py-20 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Campus & Infrastructure"
          title="Spaces built for how children actually learn"
          description="Purpose-designed facilities that support enquiry, movement, creativity and rest across the school day."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[190px]"
        >
          {FACILITIES.map((f) => (
            <motion.article
              key={f.title}
              variants={{
                hidden: { opacity: 0, scale: 0.96 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
              }}
              className={cn(
                "group relative overflow-hidden rounded-3xl shadow-soft",
                f.span,
              )}
            >
              <img
                src={f.img}
                alt={f.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg text-navy-foreground">{f.title}</h3>
                <p className="mt-1 max-h-0 overflow-hidden text-sm text-navy-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  {f.text}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
