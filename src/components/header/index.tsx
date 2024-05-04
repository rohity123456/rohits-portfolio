'use client';
import { useTheme } from '@/contexts/theme';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { IoMenuSharp, IoCloseCircleOutline } from 'react-icons/io5';
import { FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';
import usePathValue from '@/hooks/usePathValue';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLHeadElement>(null);
  function handleClickOutside(event: MouseEvent) {
    if (headerRef.current && !headerRef.current.contains(event.target as Node))
      setIsOpen(false);
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLAnchorElement) {
      setIsOpen(false);
    }
  };
  const ThemeSwitch = theme === 'dark' ? FaSun : FaMoon;
  return (
    <header
      className='bg-gray-300 dark:bg-zinc-800 min-h-12 sticky top-0 z-10 flex border-b-[1px] border-b-gray-800 dark:border-b-gray-600'
      ref={headerRef}
    >
      <div className='mx-auto flex justify-center items-center'>
        <div
          className='sm:hidden absolute left-2 cursor-pointer top-1/2 -translate-y-1/2'
          onClick={() => setTimeout(() => setIsOpen(!isOpen), 0)}
        >
          {isOpen ? (
            <IoCloseCircleOutline size={30} />
          ) : (
            <IoMenuSharp size={30} />
          )}
        </div>
        <NavBar isOpen={isOpen} handleLinkClick={handleLinkClick} />
        <ThemeSwitch
          onClick={() => setTimeout(() => toggleTheme(), 0)}
          size={30}
          className='absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer dark:text-yellow-300 text-blue-600'
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </ThemeSwitch>
      </div>
    </header>
  );
};

interface NavBarProps {
  isOpen: boolean;
  handleLinkClick: (e: React.MouseEvent<HTMLUListElement>) => void;
}
const NavBar: React.FC<NavBarProps> = ({ isOpen, handleLinkClick }) => {
  const { path } = usePathValue();
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <nav
      className={`${
        isOpen
          ? 'xs:max-sm:top-full top-1/2 xs:max-sm:-translate-y-1/4 xs:max-sm:mt-14'
          : 'xs:max-sm:-translate-y-full'
      } ${styles.nav}`}
    >
      <ul className={styles.ul} onClick={handleLinkClick}>
        {links.map((link) => {
          return (
            <li
              key={link.name}
              className={`${link.href == path ? 'text-primary' : ''}`}
            >
              <Link href={link.href} className='hover:text-primary'>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
