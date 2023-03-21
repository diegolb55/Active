import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';


export default async function AddEventAttendance(eventid, checkin, passcode, capacity, date, expiration ) {

    try {
        const newEventRef = doc(collection(db, `events/${eventid}/attendances`));
        await setDoc(newEventRef, {
            
            capacity: capacity,
            present: 0,
            date: date,
            expiration: expiration,
            checkin: checkin,
            passcode: passcode,
            attendees:[]
            
        });

        console.log('Event attendance added successfully!');
        
    } catch (error) {
        console.error('Error adding event attendance:', error);
    }
    
  

}