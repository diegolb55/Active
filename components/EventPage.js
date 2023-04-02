import Logo from "@/components/Logo"
import Head from "next/head"
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
import { IoIosArrowBack } from "react-icons/io"



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



    const guests = (n) => {
        return (
            <div className={styles.guestbox}>
                <div className={styles.avatar}></div>
                <div>
                    <p>{n}</p>
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
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>    
            </Head>            
            <div className={styles.ebar}>
                <Logo />
                { historypage ? 
                    <div className={styles.exith} onClick={() => setHistoryPage(false)}>
                        <IoIosArrowBack style={{fontSize:"1.5rem"}}/>
                        <h2>{ event.name }</h2>
                    </div>
                :
                    <h2>{ event.name }</h2>
                }
            </div>

            <div className={styles.econtentholder}>

                <motion.div className={styles.econtent}
                    animate={!historypage ? {left: 0} : {left: "-100%"}}
                >
                    {/* decorative background elements */}
                    <div className={styles.c1}></div>
                    <div className={styles.c2}></div>
                    <div className={styles.c3}></div>




                    {/* <p className={styles.einfo}>ID: { event.id }</p> */}
                    <p className={styles.einfo}>Description: { event.description } </p>

                    
                    <div className={styles.eactions}>
                        <button onClick={()=> setNewAttendancePage(true)}>new attendance</button>
                        <button onClick={() => setHistoryPage(true)}>history</button>
                    </div>

                    <div className={styles.listbox}>
                        <div className={styles.listh}>
                            <AiOutlineEye className={styles.mraEye} onClick={() => setAttendancePage(true)}/>
                            <p>Most recent attendance</p>
                        </div>
                        <div className={styles.listcont}>
                            
                            { guests("Jake Burgos") }
                            { guests("Kyle Sanchez") }
                            { guests("Natasha Sandin") }
                            { guests("Rebecca Gomez") }
                            { guests("Diego Lugo") }

                           

                        </div>
                    </div>
                    
                    <div className={styles.statsbox}>
                        <div className={styles.meanbox}>
                            <p>general mean status</p>
                            <p>10 / 50</p>
                        </div>
                        <div className={styles.miabox}>
                            <p>recent missing guests</p>
                            <div className={styles.mialist}>
                            { guests("Pedro Pascal") }
                            { guests("George Falcon") }
                            { guests("Micheal Santiago") }
                            </div>
                        </div>
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