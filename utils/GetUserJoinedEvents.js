import { useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { collection } from "@firebase/firestore";

import { db, auth } from "@/firebase";


export default function GetUserJoinedEvents() {
    const [snapshot] = useCollection(collection(db, "events"));
    const events = snapshot?.docs.map( doc => ({id: doc.id, ...doc.data()}))
  
    return events?.filter(event => event?.guests?.includes(auth.currentUser.uid)  );

}