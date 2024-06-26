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
  url: string;
  name: string;
  poster?: string;
};

export type Contact = {
  name: string;
  email: string;
  message: string;
};

type APIError = {
  message: string;
  details: string;
};

export type APIResponse = {
  data?: any;
  success: boolean;
  error?: APIError;
};
