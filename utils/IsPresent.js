import { auth } from "@/firebase";


export default function IsPresent(attendees){

    const {currentUser} = auth;
    return attendees.includes(currentUser.uid);

}