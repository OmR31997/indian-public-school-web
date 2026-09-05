import { Facebook, GraduationCap, Instagram, Linkedin, Youtube } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const COLUMNS = [
  {
    title: "About",
    links: ["Our Story", "Mission & Vision", "Leadership", "Faculty", "Careers"],
  },
  {
    title: "Academics",
    links: ["Pre-Primary", "Primary", "Middle School", "Secondary", "Senior Secondary"],
  },
  {
    title: "Admissions",
    links: ["Admission Process", "Fee Structure", "Prospectus", "Transport", "FAQs"],
  },
  {
    title: "Campus Life",
    links: ["Sports", "Arts & Culture", "Clubs", "Houses", "Events"],
  },
  {
    title: "Resources",
    links: ["Academic Calendar", "Parent Portal", "School App", "Downloads", "Alumni"],
  },
];

const SOCIALS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="surface-navy pt-16 pb-8">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_3fr]">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-gold text-gold-foreground">
                <GraduationCap className="size-5" />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold text-navy-foreground">
                  Indian Public School
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.2em] text-gold uppercase">
                  Learn · Lead · Inspire
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              A co-educational CBSE school committed to academic excellence, strong character and
              genuine care for every child.
            </p>
            <p className="mt-4 text-xs text-navy-foreground/50">
              [School address placeholder] · [Phone placeholder] · [Email placeholder]
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-navy-foreground/20 text-navy-foreground transition-all hover:-translate-y-1 hover:bg-gold hover:text-gold-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col, i) => (
              <Reveal key={col.title} delay={i * 0.05}>
                <h3 className="text-sm font-semibold tracking-wider text-gold uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#home"
                        className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-foreground/15 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-navy-foreground/60">
            © {new Date().getFullYear()} Indian Public School. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["Privacy Policy", "Terms", "Sitemap", "Mandatory Disclosure"].map((l) => (
              <li key={l}>
                <a
                  href="#home"
                  className="text-xs text-navy-foreground/60 transition-colors hover:text-gold"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
