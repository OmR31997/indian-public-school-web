import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { GraduationCap, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Campus Life", href: "#campus-life" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gold"
      aria-hidden
    />
  );
}

export function AnnouncementBar() {
  return (
    <div className="surface-navy relative z-40 text-navy-foreground">
      <div className="container-page flex flex-col items-center justify-between gap-2 py-2.5 text-center sm:flex-row sm:text-left">
        <p className="text-xs font-medium sm:text-sm">
          <span className="mr-2 inline-block rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold tracking-wider text-gold-foreground uppercase">
            New
          </span>
          Admissions Open for Academic Session 2026–27
        </p>
        <div className="flex items-center gap-2">
          <a
            href="#admissions"
            className="rounded-full bg-gold px-3.5 py-1.5 text-xs font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
          >
            Apply Now
          </a>
          <a
            href="#contact"
            className="rounded-full border border-navy-foreground/30 px-3.5 py-1.5 text-xs font-semibold transition-colors hover:bg-navy-foreground/10"
          >
            Contact School
          </a>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"
          : "bg-background/40 backdrop-blur-sm",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-105">
            <GraduationCap className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold tracking-tight sm:text-lg">
              Indian Public School
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Learn · Lead · Inspire
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 hover:w-full" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <a href="#admissions">Apply Now</a>
          </Button>
          <a
            href="#contact"
            className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary xl:hidden"
            aria-label="Contact school"
          >
            <Phone className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:bg-secondary xl:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl xl:hidden"
          >
            <motion.ul
              className="container-page grid gap-1 py-4"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.045 } } }}
            >
              {NAV.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="pt-2"
              >
                <Button asChild className="w-full rounded-full">
                  <a href="#admissions" onClick={() => setOpen(false)}>
                    Apply Now
                  </a>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
