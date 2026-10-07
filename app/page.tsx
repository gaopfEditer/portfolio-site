import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkSection } from "@/components/WorkSection";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { getPublishedCases } from "@/lib/cases";

export default function HomePage() {
  const cases = getPublishedCases();

  return (
    <>
      <Hero />
      <Services />
      <WorkSection cases={cases} />
      <Process />
      <About />
      <ContactForm />
    </>
  );
}
