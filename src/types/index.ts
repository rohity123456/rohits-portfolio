export type ViewPorts =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'max-sm'
  | 'max-md'
  | 'max-lg'
  | 'max-xl'
  | 'max-2xl'
  | 'max-mb'
  | 'max-lg'
  | 'max-xl'
  | 'max-2xl';

export type MediaObject = {
  id: string;
  type: 'image' | 'video';
  src: string;
  name: string;
  poster?: string;
};
