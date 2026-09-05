import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AnnouncementBar, Navbar, ScrollProgress } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { QuickActions } from "@/components/site/QuickActions";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Academics } from "@/components/site/Academics";
import { BeyondClassroom } from "@/components/site/BeyondClassroom";
import { Infrastructure } from "@/components/site/Infrastructure";
import { StudentLife } from "@/components/site/StudentLife";
import { Achievements } from "@/components/site/Achievements";
import { Testimonials } from "@/components/site/Testimonials";
import { NewsEvents } from "@/components/site/NewsEvents";
import { Gallery } from "@/components/site/Gallery";
import { AdmissionsCTA } from "@/components/site/AdmissionsCTA";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

const TITLE = "Indian Public School | CBSE School Admissions 2026–27";
const DESCRIPTION =
  "Indian Public School is a CBSE co-educational school where curiosity meets excellence — modern campus, experienced faculty and holistic learning. Admissions open for 2026–27.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <QuickActions />
        <About />
        <Stats />
        <WhyChoose />
        <Academics />
        <BeyondClassroom />
        <Infrastructure />
        <StudentLife />
        <Achievements />
        <Testimonials />
        <NewsEvents />
        <Gallery />
        <AdmissionsCTA />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </motion.div>
  );
}
