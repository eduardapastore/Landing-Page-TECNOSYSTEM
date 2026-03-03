import dynamic from "next/dynamic";

export const components = {
  about_section: dynamic(() => import("./AboutSection")),
  contact_section: dynamic(() => import("./ContactSection")),
  cta_footer: dynamic(() => import("./CtaFooter")),
  hero: dynamic(() => import("./Hero")), // Da Eduarda
  project_section: dynamic(() => import("./ProjectSection")),
  service_section: dynamic(() => import("./ServiceSection")),
  stack_section: dynamic(() => import("./StackSection")),
  testimonials: dynamic(() => import("./Testimonials")),
};