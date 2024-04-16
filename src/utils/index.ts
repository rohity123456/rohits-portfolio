import { ViewPorts } from '@/types';

export const forViewport = (classNames: string, prefix: ViewPorts = 'xs') => {
  return classNames
    .split(' ')
    .map((className) => `${prefix}:${className}`)
    .join(' ');
};
