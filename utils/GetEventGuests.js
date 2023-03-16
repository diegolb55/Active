import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";

export default function GetEventGuests(eventId){
    const [snapshot] = useCollection(collection(db, `events/${eventId}/guests`));
    const joinedguests = snapshot?.docs.map( doc => ({id: doc.id, ...doc.data()}));

  return joinedguests;
  
}