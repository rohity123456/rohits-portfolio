import ContactSection from './components/contactSection';
import HeroSection from './components/heroSection';
import ProjectsSection from './components/projectsSection';
import SkillsSection from './components/skillsSection';

export default function Home() {
  const sections = [
    {
      name: 'Skills',
      component: <SkillsSection />
    },
    {
      name: 'Projects',
      component: <ProjectsSection />
    },
    {
      name: 'Contact',
      component: <ContactSection />
    }
  ];

  return (
    <div className='z-10 w-full items-center justify-between font-mono text-sm'>
      <HeroSection />
      {sections.map((section) => (
        <section
          className='shadow-lg pb-6 mx-6'
          key={section.name}
          id={section.name.toLowerCase()}
        >
          <h2 className='text-2xl font-bold text-center my-4 mt-8'>
            {section.name}
          </h2>
          {section.component}
        </section>
      ))}
    </div>
  );
}
