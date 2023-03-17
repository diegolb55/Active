import TMToDateFormat from "./TMToDateFormat";
import { Timestamp } from "firebase/firestore";

export default function AttStatus({start, exp, setRegAtt, setSelectedAtt, att}){


    if (start && exp){

        const current = Timestamp.now();

        // between values
        if (current.seconds < start.seconds){
            return <p>--/--</p>
        }
        if(current.seconds >= start.seconds && current.seconds < exp.seconds){
            return <button onClick={ ()=> {
                setRegAtt(true)
                setSelectedAtt(att)
            }}> Add </button>

        }

        

        return <p>missing</p>;

    }


}