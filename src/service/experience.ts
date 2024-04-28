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
    return experiences;
  } catch (error) {
    console.log('Error fetching experiences', error);
  }
};
