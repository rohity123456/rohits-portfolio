import ProjectCard from '@/pages/projects/components/projectCard';
import { getProjects } from '@/service/project';

type ProjectsSectionProps = {};
const ProjectsSection: React.FC<ProjectsSectionProps> = async ({}) => {
  const projects = await getProjects();
  return (
    <section>
      <div className='flex flex-wrap justify-center gap-4'>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
