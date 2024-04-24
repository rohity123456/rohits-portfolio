import { Project } from '@/app/projects/types';
import { firestoreDb } from '@/firebase';
import { MediaObject } from '@/types';
import {
  collection,
  DocumentReference,
  getDoc,
  getDocs
} from 'firebase/firestore';

export const getProjects = async () => {
  const projectsCollection = collection(firestoreDb, 'projects');
  const projectsSnapshot = await getDocs(projectsCollection);
  const projects = projectsSnapshot.docs.map((doc) => doc.data() as Project);
  console.log('Projectaa: ', projects);
  return await Promise.all(
    projects.map(async (project) => {
      project.mediaList = await Promise.all(
        project.mediaList.map((media) => {
          return getDoc(media as unknown as DocumentReference).then((doc) => ({
            ...doc.data(),
            id: doc.id
          })) as Promise<MediaObject>;
        })
      );
      return project;
    })
  );

  return projects;
};
