import { getExperiences } from '@/service/experience';
import ExperienceItem from './components/experienceCard';

const ExperiencePage: React.FC = async () => {
  const experiences = (await getExperiences()) || [];
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
