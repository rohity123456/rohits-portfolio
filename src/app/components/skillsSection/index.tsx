'use client';
import useScrollTransition from '@/hooks/useScrollTransition';
import Image from 'next/image';

type Skill = {
  name: string;
  icon: string;
  category: string;
};

type SkillsSectionProps = {
  // skills: Skill[];
};

const SkillsSection = ({}: SkillsSectionProps) => {
  const { isVisible, domRef } = useScrollTransition();
  return (
    <div
      id='skills'
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      ref={domRef}
    >
      <div className='grid grid-cols-3 gap-4'>
        {/* {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center p-2 bg-white dark:bg-gray-900 shadow-md rounded-lg'
          >
            <Image src={skill.icon} alt={skill.name} width={50} height={50} />
            <span className='mt-2'>{skill.name}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SkillsSection;
