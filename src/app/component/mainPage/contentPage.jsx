import AboutSection from "./aboutSection/about";
import ExperienceSection from "./experienceSection/experience";
import ProjectSection from "./projectSection/project";

export default function ContentSection() {
    return (
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <AboutSection />
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <ExperienceSection />
            </section>

            <section id="project" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <ProjectSection />
            </section>
        </main>
    )
}