import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";


export default function GetAttendeeNames(attendees){

    const [snapshot] = useCollection(collection(db, `users`));
    const users = snapshot?.docs.map( doc => ({id: doc.id, ...doc.data()}))


    const idSet = new Set(attendees);
    const attendeeNames = [];
    for (let i = 0; i < users?.length; i++) {
        
        if (idSet.has(users[i].id)) {

            attendeeNames.push(users[i].name);
            
        }
    }
    return attendeeNames;
  
}