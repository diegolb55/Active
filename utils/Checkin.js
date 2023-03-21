import { useState } from 'react';
import { doc, setDoc, collection, addDoc, updateDoc, arrayUnion,  } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { async } from '@firebase/util';

export default async function Checkin(eid, attId, newGuestId){


    try {
        const {currentUser} = auth;
        const newEventRef = doc(collection(db, `events/${eid}/attendances`), attId);
        await updateDoc(newEventRef, {
            attendees: arrayUnion(currentUser.uid)
        });

        console.log('Attendee checked in successfully!');
        
    } catch (error) {
        console.error('Error checkin in attendee:', error);
    }

}