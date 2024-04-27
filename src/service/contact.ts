import { firestoreDb } from '@/firebase';
import { APIResponse, Contact } from '@/types';
import { addDoc, collection } from 'firebase/firestore';

const sendEmail = async (contact: Contact): Promise<APIResponse> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  });
  const responseJson = await response.json();
  return responseJson as APIResponse;
};

export const sendContact = async (contact: Contact) => {
  try {
    const ref = collection(firestoreDb, 'contacts');
    addDoc(ref, contact);
    const res = await sendEmail(contact);
    return res;
  } catch (error: any) {
    return {
      success: false,
      error: {
        message: 'Sorry, there was an error sending your message',
        details: error.message
      }
    };
  }
};
