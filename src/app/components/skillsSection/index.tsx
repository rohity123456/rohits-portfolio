'use client';
import useScrollTransition from '@/hooks/useScrollTransition';
import { BsServer } from 'react-icons/bs';
import { DiMongodb } from 'react-icons/di';
import {
  FaAws,
  FaCloud,
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJs,
  FaMobile,
  FaNodeJs,
  FaPython,
  FaReact
} from 'react-icons/fa';
import { FcCollaboration, FcGoogle } from 'react-icons/fc';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { MdMarkChatRead, MdOutlineJoinFull } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import { SiDavinciresolve, SiPostgresql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

type Skill = {
  name: string;
  icon: JSX.Element;
  category: string;
};

type SkillsSection = {
  section: string;
  skills: Skill[];
  icon: JSX.Element;
};

const getSkills = (): SkillsSection[] => {
  return [
    {
      section: 'frontend',
      icon: <FaMobile className='text-blue-500' />,
      skills: [
        {
          name: 'JavaScript(with TS)',
          icon: <FaJs size={25} className='text-yellow-300' />,
          category: 'frontend'
        },
        {
          name: 'React',
          icon: <FaReact size={25} className='text-sky-400' />,
          category: 'frontend'
        },
        {
          name: 'Next.js',
          icon: (
            <TbBrandNextjs size={25} className='text-black dark:text-white' />
          ),
          category: 'frontend'
        },
        {
          name: 'HTML',
          icon: <FaHtml5 size={25} className='text-orange-400' />,
          category: 'frontend'
        },
        {
          name: 'CSS',
          icon: <FaCss3 size={25} className='text-blue-400' />,
          category: 'frontend'
        }
      ]
    },
    {
      section: 'backend',
      icon: <BsServer className='text-green-400' />,
      skills: [
        {
          name: 'Node.js (Express)',
          icon: <FaNodeJs size={25} className='text-green-500' />,
          category: 'backend'
        },
        {
          name: 'Python (Flask)',
          icon: <FaPython size={25} className='text-blue-500' />,
          category: 'backend'
        },
        {
          name: 'MongoDB',
          icon: <DiMongodb size={25} className='text-green-500' />,
          category: 'backend'
        },
        {
          name: 'PostgreSQL',
          icon: (
            <SiPostgresql
              size={25}
              className='text-cyan-900 dark:text-cyan-300'
            />
          ),
          category: 'backend'
        }
      ]
    },
    {
      section: 'infrastructure',
      icon: <FaCloud className='text-cyan-400' />,
      skills: [
        {
          name: 'AWS',
          icon: <FaAws size={25} className='text-orange-400' />,
          category: 'infrastructure'
        },
        {
          name: 'GCP',
          icon: <FcGoogle size={25} />,
          category: 'infrastructure'
        },
        {
          name: 'Docker',
          icon: <FaDocker size={25} className='text-blue-500' />,
          category: 'infrastructure'
        },
        {
          name: 'GitHub Actions',
          icon: <FaGithub size={25} className='text-black dark:text-white' />,
          category: 'infrastructure'
        }
      ]
    },
    {
      section: 'Soft Skills',
      icon: <FcCollaboration className='text-orange-400' />,
      skills: [
        {
          name: 'Communication',
          icon: <MdMarkChatRead size={25} className='text-yellow-500' />,
          category: 'soft-skills'
        },
        {
          name: 'Teamwork',
          icon: <RiTeamLine size={25} className='text-purple-400' />,
          category: 'soft-skills'
        },
        {
          name: 'Problem Solving',
          icon: <SiDavinciresolve size={25} className='text-green-400' />,
          category: 'soft-skills'
        },
        {
          name: 'Quick Learner',
          icon: <MdOutlineJoinFull size={25} className='text-purple-500' />,
          category: 'soft-skills'
        }
      ]
    }
  ];
};

const SkillsSection: React.FC = () => {
  const { isVisible, domRef } = useScrollTransition();
  const skills = getSkills();
  return (
    <div
      id='skills'
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      ref={domRef}
    >
      <div className='hidden sm:flex'>
        {skills.map((category, index) => (
          <div key={index} className='px-4 flex-1'>
            <h3 className='text-lg font-semibold capitalize flex items-center gap-1'>
              {category.icon} {category.section}
            </h3>
            <SkillsTree skills={category.skills} />
          </div>
        ))}
      </div>
      <div className='sm:hidden flex items-center justify-start flex-col'>
        {skills.map((category, index) => (
          <details key={index} className='mb-4'>
            <summary className='font-semibold text-lg flex items-center'>
              <IoIosArrowDropdownCircle size={20} className='-rotate-90' />{' '}
              <span className='capitalize'>{category.section}</span>{' '}
              {category.icon}
            </summary>

            <SkillsTree skills={category.skills} />
          </details>
        ))}
      </div>
    </div>
  );
};

const SkillsTree: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className='mt-2 border-l-2 border-gray-700 dark:border-gray-50 hover:border-primary'>
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className='my-2 flex items-center before:content-[""] before:w-4 before:h-[2px]  dark:before:bg-gray-50 before:bg-gray-700'
        >
          {skill.icon}
          <span className='ml-2'>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
