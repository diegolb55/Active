import styles from "@/styles/JoinedEventPage.module.css"
import Logo from "@/components/Logo"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import RegisterAttendance from "@/components/RegisterAttendance"
import { IoIosArrowBack } from "react-icons/io"

import { useRouter } from "next/router"
import { GetEventById } from "@/utils/GetEventById"
import  DeleteDocument from '@/utils/DeleteDocument'

import GetEventAttendances from "@/utils/GetEventAttendances"
import TMToDateFormat from "@/utils/TMToDateFormat"
import IsPresent from "@/utils/IsPresent"
import AttStatus from "@/utils/AttStatus"
import { Timestamp } from "firebase/firestore"




export default function JoinedEventPage(){

    const [regatt, setRegAtt] = useState(false);

    // dynamic routing to open page with specific event
    const router = useRouter();
    const { eventId } = router?.query;
    const [event, setEvent] = useState({});
    useEffect(() => {
        async function fetchEvent() {
          const event = await GetEventById(eventId);
          setEvent(event);
        }
        fetchEvent();
    }, [eventId]);


    const attendances = GetEventAttendances(event.id);
    const [selectedAtt, setSelectedAtt] = useState({});

    const getattendances = () => {
        return attendances?.map(
            att =>
            <div key={Math.random()} className={styles.abox}>
                <p>date: {TMToDateFormat(att.date)}</p>

                
                {
                    IsPresent(att.attendees) ?
                    <p>present</p>
                    :
                    <AttStatus start={att.date} exp={att.expiration} 
                        setRegAtt={setRegAtt} setSelectedAtt={setSelectedAtt}
                        att={att}
                    />
                }
                
            </div>
        )
    }


    return (
        <div className={styles.jepage}>

            <div className={styles.ebar}>
                <Logo />
                {regatt ? <h3>Register Attendance</h3>:<h3>Status</h3>}
            </div>

         

            <motion.div
                className={styles.jename}

                animate={!regatt ? {left: 30, right:"auto"} : {left:"auto",right:30} }
                onClick={ ()=>setRegAtt(false) }
            >
                { !regatt ? <></> :<IoIosArrowBack/>}
                <h3> {event?.name} </h3>
                
            </motion.div>

            <div className={styles.jecontentholder}>
                <motion.div className={styles.jecontent}
                    animate={!regatt ? {left: 0} : {left: "-100%"}}
                >
                    
                    <h4>Event Description:</h4>
                    <p>{ event?.description }</p>
                    <h4>Mean Status:</h4>
                    <p>20 / 50</p>
                    

                    <br />

                    <p>My attendances:</p>
                    <div className={styles.attendances}>
                        { 
                            getattendances()
                        }
                       
                    </div>
                </motion.div>
                
                <RegisterAttendance 
                    att={selectedAtt}
                    isOpen={regatt} toggle={setRegAtt} 
                    event={event}
                />

            </div>

        </div>
    )
}