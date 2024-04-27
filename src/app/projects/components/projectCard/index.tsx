import React from 'react';
import { Project } from '../../types';
import Carousel from '@/components/carousel';

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
            className='btn bg-primary text-secondary hover:text-primary'
            target='_blank'
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
