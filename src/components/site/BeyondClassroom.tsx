import { motion } from "motion/react";
import {
  Award,
  Compass,
  Drama,
  Globe2,
  Music4,
  Palette,
  Trophy,
  Users2,
} from "lucide-react";
import { SectionHeading } from "@/components/site/Reveal";
import { EASE } from "@/lib/motion-presets";

const ITEMS = [
  { icon: Trophy, title: "Sports", text: "Inter-house leagues, athletics meets and daily coaching." },
  { icon: Music4, title: "Music", text: "Vocal, keyboard, percussion and school ensemble." },
  { icon: Drama, title: "Dance", text: "Classical and contemporary forms, staged every term." },
  { icon: Palette, title: "Art", text: "Drawing, painting, pottery and design thinking studios." },
  { icon: Users2, title: "Clubs", text: "Robotics, eco, debate, literary, coding and photography." },
  { icon: Award, title: "Competitions", text: "Olympiads, quizzes, MUN and inter-school festivals." },
  { icon: Globe2, title: "Educational Tours", text: "Field visits, heritage walks and residential trips." },
  { icon: Compass, title: "Leadership", text: "Student council, house captains and peer mentoring." },
];

export function BeyondClassroom() {
  return (
    <section id="campus-life" className="overflow-hidden py-20 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Learning Beyond the Classroom"
          title="Where interests turn into identity"
          description="Every week brings something to try, practise and perform — because confidence is built outside the textbook too."
          align="left"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:thin] lg:px-[max(1.25rem,calc((100vw-84rem)/2+1.25rem))]"
      >
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <motion.article
            key={title}
            variants={{
              hidden: { opacity: 0, x: 40 },
              show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
            }}
            whileHover={{ y: -8 }}
            className="group w-[72vw] shrink-0 snap-start rounded-3xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift sm:w-[300px]"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 text-xl">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </motion.article>
        ))}
      </motion.div>
      <p className="container-page text-xs text-muted-foreground">Scroll sideways to see more →</p>
    </section>
  );
}
