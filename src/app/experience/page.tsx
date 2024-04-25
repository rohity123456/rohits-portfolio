import ExperienceItem from './components/experienceCard';
import { Experience } from './types';

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Fullstack Engineer',
    company: '1Bstories',
    location: 'Remote, Singapore',
    startDate: 'April 2023',
    endDate: 'March 2024',
    description: [
      'Lead the development of Vidiofy from an <fontStyle value="bold">Idea --> POC --> live product</fontStyle> used by 1000+ users daily.',
      'Significantly enhanced video generation speed by implementing parallelization in video generation pipeline, resulting in over 100% improvement in performance.',
      'Designed and implemented dynamic video templates, enabling easy creation of videos for voice, non-voice, and avatar narrations using the same template. This eliminated the need for separate templates for each narration type, resulting in improved efficiency and streamlined video production processes.',
      `Managed Vidiofy's voice and avatar libraries, also added feature for users to create their own voices and avatars.`,
      'Developed various features including synchronized captions, linear video narration, template customization, among others.',
      'Integrated mixpanel analytics to track product usage and user behavior, providing valuable insights for decision-making.',
      'Tech/Tools : React (Next JS), Python, Typescript, Mongo, AWS, LLMs, CI/CD, New Relic, Sentry, etc.'
    ]
  },
  {
    id: '2',
    title: 'Senior Fullstack Engineer',
    company: 'Confetto Pvt. Ltd.',
    location: 'Remote, Singapore',
    startDate: 'March 2022',
    endDate: 'March 2023',
    description: [
      `Worked as a senior fullstack engineer, designing and developing key features for the app. `,
      `Built a calendar-based content planning tool from scratch helping users plan and schedule their content.`,
      `Created an advanced-level photo editor from the ground up, with all required photo editing features.`,
      `Integrated the product analytics provider mixpanel and implemented event tracking throughout the app.`,
      `Developed a standalone designer app for the company's designers to create design templates.`,
      `Tech/Tools : React (Next JS), Node Js, Typescript, Mongo, AWS, CI/CD, etc.`
    ]
  },
  {
    id: '3',
    title: 'Frontend Engineer',
    company: 'Fragma Data Systems',
    location: 'Remote, India',
    startDate: 'May 2021',
    endDate: 'March 2022',
    description: [
      `Worked with Fragma's client Mashreq Global Services to build their product Nitro Advanced Analytics right from very initial stages of development.`,
      `Created chart components library as per Nitro's design system which hugely reduced development effort.`,
      `Used test libraries like jest and enzyme to write unit test cases following test driven development.`,
      `Tech/Tools : React JS, Node Js, Typescript, Mongo, Azure DevOps, etc.`
    ]
  },
  {
    id: '4',
    title: 'Fullstack Engineer',
    company: 'Vistaar Technologies',
    location: 'Mumbai, India',
    startDate: 'July 2019',
    endDate: 'May 2021',
    description: [
      `Worked on Vistaar's SaaS based product named "Price Structure Management (PSM)" which drives companies 70% revenue. PSM helps businesses optimize there pricing needs.`,
      `Worked on multple products like Chain Plan Management, Combo Management, Control State Planner.`,
      `Debugged the complete project and fixed numerous issues, resulting in improved overall performance.`,
      `Tech/Tools : React JS, Ext Js, SQL, Mongo, AWS etc.`
    ]
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <div className='mx-auto sm:px-4 py-8'>
      <h1 className='text-3xl font-bold text-center mb-6'>
        Professional Experience
      </h1>
      <div className='border-l-2 ml-4 pl-4'>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
