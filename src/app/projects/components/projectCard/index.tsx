import React from 'react';
import { Project } from '../../types';
import Carousel from '@/components/carousel';
import { FaCode } from 'react-icons/fa';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, description, repoUrl, mediaList } = project;
  return (
    <div className='card w-96 dark:bg-zinc-700 bg-gray-300 shadow-xl'>
      <div className='card-body w-full h-72'>
        <Carousel media={mediaList} isAutoSlide={true} />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <a
            href={repoUrl}
            className='btn bg-primary text-secondary hover:text-primary hover:bg-secondary py-2 h-10 min-h-10'
            target='_blank'
          >
            <FaCode size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
