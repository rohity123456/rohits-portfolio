import { Experience } from '@/app/experience/types';
import { firestoreDb } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const getExperiences = async () => {
  try {
    const experienceCollection = collection(firestoreDb, 'experiences');
    const experienceSnapshot = await getDocs(experienceCollection);
    const experiences = await experienceSnapshot.docs.map(
      (doc) => doc.data() as Experience
    );
    experiences.sort((a, b) =>
      new Date(b.startDate) > new Date(a.startDate) ? 1 : -1
    );
    return experiences;
  } catch (error) {
    console.log('Error fetching experiences', error);
  }
};
