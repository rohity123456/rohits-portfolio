import { Project } from '@/app/projects/types';
import { firestoreDb } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getProjects = async () => {
  const projectsCollection = collection(firestoreDb, 'projects');
  const projectsSnapshot = await getDocs(projectsCollection);
  const projects = projectsSnapshot.docs.map((doc) => doc.data() as Project);
  return projects;
};
