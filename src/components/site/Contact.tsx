import { motion } from "motion/react";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/Reveal";
import { EASE } from "@/lib/motion-presets";

const DETAILS = [
  {
    icon: MapPin,
    label: "Campus Address",
    value: "[School address placeholder]",
    note: "To be confirmed by the school office",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "[Phone number placeholder]",
    note: "Mon–Sat, office hours",
  },
  {
    icon: Mail,
    label: "Email",
    value: "[Email address placeholder]",
    note: "Admissions & general enquiries",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "[Timing placeholder]",
    note: "Campus visits by appointment",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Visit us, call us, write to us"
          description="Contact details below are clearly marked placeholders and should be replaced with the school's verified information."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.09 } } }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {DETAILS.map(({ icon: Icon, label, value, note }) => (
              <motion.li
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <p className="mt-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {label}
                </p>
                <p className="mt-1 text-base font-semibold">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{note}</p>
              </motion.li>
            ))}
            <li className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <a href="#enquiry">
                  <Phone className="mr-1 size-4" /> Call School
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="#enquiry">
                  <Mail className="mr-1 size-4" /> Email Us
                </a>
              </Button>
              <Button asChild variant="secondary" className="rounded-full">
                <a href="#enquiry">
                  <Navigation className="mr-1 size-4" /> Get Directions
                </a>
              </Button>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border bg-secondary/60 shadow-soft"
          >
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
              aria-hidden
            />
            <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center gap-3 p-8 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <MapPin className="size-5" />
              </span>
              <p className="text-lg font-semibold">Map placeholder</p>
              <p className="max-w-xs text-sm text-muted-foreground">
                An embedded campus map will appear here once the school confirms its verified
                address and location pin.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
