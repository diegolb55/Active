import styles from "@/styles/JoinedEventPage.module.css"
import Logo from "@/components/Logo"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import RegisterAttendance from "@/components/RegisterAttendance"
import { IoIosArrowBack } from "react-icons/io"

import { useRouter } from "next/router"
import { GetEventById } from "@/utils/GetEventById"
import  DeleteDocument from '@/utils/DeleteDocument'



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
                    <h4>Event Id: 
                        <span style={{fontWeight:"lighter"}}>
                            { event?.id }
                        </span>
                    </h4>
                    <h4>Event Description:</h4>
                    <p>{ event?.description }</p>
                    <h4>Mean Status:</h4>
                    <p>20 / 50</p>
                    

                    <br />

                    <p>My attendances:</p>
                    <div className={styles.attendances}>
                        <div className={styles.abox}>
                            <p>date: 00/00/00</p>
                            <p>present</p>
                        </div>
                        <div className={styles.abox}>
                            <p>date: 00/00/00</p>
                            <p>present</p>
                        </div>
                        <div className={styles.abox}>
                            <p>date: 00/00/00</p>
                            <p>present</p>
                        </div>
                        <div className={styles.abox}>
                            <p>date: 00/00/00</p>
                            <p>present</p>
                        </div>
                        <div className={styles.abox}>
                            <p>date: 00/00/00</p>
                            <p>present</p>
                        </div>
                        <div className={styles.abox}>
                            <p>date: 00/00/00</p>
                            <button onClick={ ()=> setRegAtt(true)}> Add </button>
                        </div>
                    </div>
                </motion.div>
                
                <RegisterAttendance isOpen={regatt} toggle={setRegAtt} />

            </div>

        </div>
    )
}