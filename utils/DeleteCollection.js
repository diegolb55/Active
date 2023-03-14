import { db, auth } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, deleteDoc, deleteField, writeBatch} from "@firebase/firestore";

export const DeleteCollection = (collectionPath) => {

    const collectionRef = collection("events","KWteLRBucCW5XCpe5ei1");
    //   const [collectionRef] = useCollection(collection(db, "events"));

    
    // collectionRef.get().then((snapshot) => {

    //   if (snapshot.size > 0) {
    //     const batch = writeBatch(db);

    //     snapshot.docs.forEach((doc) => {
    //       batch.delete(doc.ref);
    //     });
  
    //     batch.commit().then(() => {
    //       deleteCollection(collectionPath);
    //     });
    //   } else {
    //     collectionRef.delete().then(() => {
    //       console.log(`${collectionPath} collection deleted`);
    //     });
    //   }
    // });
  };