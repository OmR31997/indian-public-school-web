import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Compass, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import aboutImage from "@/assets/about-classroom.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", reduced ? "-6%" : "8%"]);

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div ref={ref} className="relative">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] shadow-lift"
          >
            <motion.img
              style={{ y }}
              src={aboutImage}
              alt="A teacher guiding students in a bright, technology-enabled classroom"
              width={1400}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full scale-110 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-2 -bottom-8 hidden w-56 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-lift sm:block lg:-right-10"
          >
            <img
              src={campusAerial}
              alt="Aerial view of the school campus and sports grounds"
              width={1600}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <p className="px-2 py-2 text-xs font-semibold text-muted-foreground">
              A green, purpose-built campus
            </p>
          </motion.div>
        </div>

        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-gold" aria-hidden />
              About Our School
            </span>
            <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              Building Confident Learners for a Changing World
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Indian Public School is a co-educational CBSE school where academic rigour meets
              genuine care. Our classrooms are designed for enquiry rather than repetition, and
              our teachers know every child by name, strength and ambition.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From the earliest years to senior secondary, students are guided to think clearly,
              speak confidently, collaborate generously and act with integrity.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To nurture curious, compassionate learners through excellent teaching, strong values and real opportunity for every child.",
              },
              {
                icon: Compass,
                title: "Our Vision",
                text: "To be a school where academic excellence, character and creativity grow together — preparing students for a changing world.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.1 * i}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Button asChild size="lg" className="group mt-8 rounded-full">
              <a href="#academics">
                Discover Our Story
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
