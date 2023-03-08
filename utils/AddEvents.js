import { useState } from 'react';
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { auth, db } from '@/firebase';


export default async function AddEvents(name, description, location) {


    try {
        const { currentUser } = auth;
        const newEventRef = doc(collection(db, 'events'));
        await setDoc(newEventRef, {
            name: name,
            description: description,
            location: location,
            coordinator: currentUser.uid,
        });

        console.log('Event added successfully!');
        
    } catch (error) {
        console.error('Error adding event:', error);
    }
    
  

}