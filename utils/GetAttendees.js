import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";


export default function GetAttendees(eventid, attid){

    const [snapshot] = useCollection(collection(db, `events/${eventid}/attendances/${attid}/attendees`));
    const attendees = snapshot?.docs.map( doc => ({id: doc.id, ...doc.data()}))
  
    return attendees;
}