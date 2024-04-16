// src/components/ProjectsSection.tsx
import Image from 'next/image';
import React from 'react';
import { Project } from '../../types';

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imageUrl,
  demoUrl,
  repoUrl
}) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <Image src={imageUrl} alt='Project' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <a href={demoUrl} className='btn btn-primary' target='_blank'>
            Demo
          </a>
          <a href={repoUrl} className='btn' target='_blank'>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
