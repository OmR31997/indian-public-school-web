import { motion } from "motion/react";
import { Counter } from "@/components/site/Counter";
import { EASE } from "@/lib/motion-presets";

const STATS = [
  { value: 1800, suffix: "+", label: "Students", note: "Pre-primary to Grade XII" },
  { value: 120, suffix: "+", label: "Faculty & Staff", note: "Trained CBSE educators" },
  { value: 25, suffix: "+", label: "Years of Excellence", note: "Serving the community" },
  { value: 10, suffix: " acres", label: "Campus Area", note: "Green, purpose-built" },
  { value: 40, suffix: "+", label: "Activities & Clubs", note: "Beyond the classroom" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/50 py-14 lg:py-20">
      <div className="container-page">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
        >
          {STATS.map((s) => (
            <motion.li
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
              }}
              className="text-center sm:text-left"
            >
              <p className="font-display text-3xl leading-none font-semibold text-primary sm:text-4xl lg:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
            </motion.li>
          ))}
        </motion.ul>
        <p className="mt-10 text-center text-xs text-muted-foreground sm:text-left">
          Figures shown are indicative placeholders pending confirmation by the school office.
        </p>
      </div>
    </section>
  );
}
