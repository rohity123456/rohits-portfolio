import React from 'react';
import { Experience } from '../../types';
import RichTextParser from '@/components/richTextParser';
import styles from './index.module.scss';

type ExperienceItemProps = {
  experience: Experience;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div
      className={`mb-8 relative ${styles.beforeElement} ${styles.afterElement}`}
    >
      <h3 className='text-xl font-bold'>
        {experience.title} - {experience.company}
      </h3>
      <p className='text-sm'>{experience.location}</p>
      <p className='text-sm'>
        {experience.startDate} - {experience.endDate}
      </p>
      <ul className='list-disc ml-5 mt-2'>
        {experience.description.map((item, index) => (
          <div
            key={index}
            className={`relative ${styles.beforeListItemElement}`}
          >
            <RichTextParser text={item} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
