import { MediaObject } from '@/types';

export type Project = {
  id: number;
  title: string;
  description: string;
  repoUrl: string;
  mediaList: MediaObject[];
};
