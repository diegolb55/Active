import { db, auth } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";

export default function AvailableEvents(){

  const [snapshot] = useCollection(collection(db, "events"));
  const events = snapshot?.docs.map( doc => ({id: doc.id, ...doc.data()}))

  return events?.filter(event => event.coordinator !== auth.currentUser.uid && !event?.guests?.includes(auth.currentUser.uid));
    
}