import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";

export default function GetEventAttendances(eventid){
    const [snapshot] = useCollection(collection(db, `events/${eventid}/attendances`));
    const attendances = snapshot?.docs.map( doc => ({id: doc.id, ...doc.data()}))
  
    return attendances;
}