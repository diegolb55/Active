import Logo from "@/components/Logo"
import styles from "@/styles/EventPage.module.css"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import { AiOutlineEye } from "react-icons/ai"

import EventHistory from "@/components/EventHistory"
import AttendanceList from "@/components/AttendanceList"
import NewAttendanceList from "@/components/NewAttendanceList"

import { useRouter } from "next/router"
import { GetEventById } from "@/utils/GetEventById"
import  DeleteDocument from '@/utils/DeleteDocument'


export default function EventPage(){

    // toggle history page
    const [historypage, setHistoryPage] = useState(false);

    // toggle attendance page
    const [attendancepage, setAttendancePage] = useState(false);
    // attendance to pass to the attendance list page
    const [ selectedAttendance, setSelectedAttendance ] = useState({}); 


    // toggle the page to create new attendances
    const [newattendancepage, setNewAttendancePage] = useState(false);

    // dynamic routing to open page with specific event
    const router = useRouter();
    const { eventId } = router.query;
    const [event, setEvent] = useState({});
    useEffect(() => {
        async function fetchEvent() {
          const event = await GetEventById(eventId);
          setEvent(event);
        }
        fetchEvent();
    }, [eventId]);



    const guests = () => {
        return (
            <div className={styles.guestbox}>
                <div className={styles.avatar}></div>
                <div>
                    <p>name</p>
                    <p>identification number</p>
                </div>
            </div>
        )
    }
    const handleDelete = () => {
        console.log("clecked")
        DeleteDocument(event.id);
        router.push('/');
        
    }



    return (
        <div className={styles.eventpage}>
            
            <div className={styles.ebar}>
                <Logo />
                { historypage ? 
                    <h2>Event History</h2>
                :
                    <h2>{ event.name }</h2>
                }
            </div>

            <div className={styles.econtentholder}>
                <motion.div className={styles.econtent}
                    animate={!historypage ? {left: 0} : {left: "-100%"}}
                >
                    <p className={styles.einfo}>ID: { event.id }</p>
                    <p className={styles.einfo}>Description: { event.description } </p>


                    <div className={styles.eactions}>
                        <button onClick={()=> setNewAttendancePage(true)}>new attendance</button>
                        <p onClick={() => setHistoryPage(true)}>history</p>
                    </div>

                    <div className={styles.listbox}>
                        <div className={styles.listh}>
                            <AiOutlineEye                              
                                onClick={() => setAttendancePage(true)}
                                />
                            <p>Most recent attendance list</p>
                            <p>sort by</p>
                        </div>
                        <div className={styles.listcont}>
                            
                            { guests() }
                            { guests() }
                            { guests() }
                            { guests() }
                            { guests() }
                            { guests() }
                            { guests() }
                            { guests() }

                        </div>
                    </div>
                    
                    <div className={styles.statsbox}>
                        <div className={styles.meanbox}></div>
                        <div className={styles.miabox}></div>
                    </div>
                    {/* <button onClick={() => handleDelete()}>delete event</button> */}

                </motion.div>
                
                <EventHistory event={event} 
                    isOpen={historypage} 
                    toggle={setHistoryPage} 
                    toggleAtt={setAttendancePage}
                    changeAtt={setSelectedAttendance}

                />

            </div>
            <NewAttendanceList event={event} isOpen={newattendancepage} toggle={setNewAttendancePage}/>
            <AttendanceList 
                isOpen={attendancepage} 
                toggle={setAttendancePage}
                changeAtt={setSelectedAttendance}
                event={event}
                att={selectedAttendance}
                    
            />
        </div>
    )
}