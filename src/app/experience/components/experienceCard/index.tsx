import React from 'react';
import { Experience } from '../../types';
import RichTextParser from '@/components/richTextParser';

type ExperienceItemProps = {
  experience: Experience;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className='mb-8 relative before:content-[""] before:w-5 before:rounded-full before:h-5 before:bg-primary before:absolute before:-left-7 before:top-1'>
      <h3 className='text-xl font-bold'>
        {experience.title} - {experience.company}
      </h3>
      <p className='text-sm'>{experience.location}</p>
      <p className='text-sm'>
        {experience.startDate} - {experience.endDate}
      </p>
      <ul className='list-disc ml-5 mt-2'>
        {experience.description.map((item, index) => (
          <li key={index} className=''>
            <RichTextParser text={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
