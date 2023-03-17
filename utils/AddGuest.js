import { useState } from 'react';
import { doc, setDoc, collection, addDoc, updateDoc, arrayUnion,  } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { async } from '@firebase/util';

export default async function AddGuest(eid, newGuestId){


    try {
        const newEventRef = doc(collection(db, 'events'), eid);
        await updateDoc(newEventRef, {
            guests: arrayUnion(newGuestId)

        });

        console.log('Event guest added successfully!');
        
    } catch (error) {
        console.error('Error adding event guest:', error);
    }

}