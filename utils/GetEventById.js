import { db } from "@/firebase";
import { doc, collection, getDoc } from "firebase/firestore";

export const GetEventById = async (eventId) => {
        
        const eventRef = doc(db, "events", eventId)
        const eventDoc = await getDoc(eventRef);

        console.log(eventDoc)

        if (eventDoc.exists) {
            return { id: eventDoc.id, ...eventDoc.data() };
        } else {
            return null;
        }
    };