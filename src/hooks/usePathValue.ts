'use client';
import { useEffect, useState } from 'react';

const usePathValue = () => {
  const [path, setPath] = useState('');

  useEffect(() => {
    const checkForUrlChange = () => {
      const currentPath = window.location.pathname + window.location.hash;
      if (path !== currentPath) {
        setPath(currentPath);
      }
    };

    const intervalId = setInterval(checkForUrlChange, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [path]);
  return { path, setPath };
};

export default usePathValue;
