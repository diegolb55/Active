import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';


export default async function AddEventAttendance(eventid, modality, capacity, date, expiration ) {

    try {
        const newEventRef = doc(collection(db, `events/${eventid}/attendances`));
        await setDoc(newEventRef, {
            modality: modality,
            capacity: capacity,
            present: 0,
            date: date,
            expiration: expiration
        });

        console.log('Event attendance added successfully!');
        
    } catch (error) {
        console.error('Error adding event attendance:', error);
    }
    
  

}