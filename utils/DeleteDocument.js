import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { db } from "@/firebase";
import { collection, doc, deleteDoc, deleteField, writeBatch} from "@firebase/firestore";


const  DeleteDocument = async (docId) => {

    try {
        await deleteDoc( doc(db, "events", docId) );
        console.log(`Document with ID ${docId} deleted successfully`);
  
      } catch (error) {
        console.error('Error deleting document:', error);
      }

  
};

export default DeleteDocument;