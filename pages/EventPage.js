import Logo from "@/components/Logo"
import styles from "@/styles/EventPage.module.css"
import { motion } from "framer-motion"
import { useState } from "react"

import EventHistory from "@/components/EventHistory"
import AttendanceList from "@/components/AttendanceList"


export default function EventPage(){

    const [historypage, setHistoryPage] = useState(false);
    const [attendancepage, setAttendancePage] = useState(false);

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

    return (
        <div className={styles.eventpage}>
            
            <div className={styles.ebar}>
                <Logo />
                { historypage ? 
                    <h2>Event History</h2>
                :
                    <h2>Event Name</h2>
                }
            </div>

            <div className={styles.econtentholder}>
                <motion.div className={styles.econtent}
                    animate={!historypage ? {left: 0} : {left: "-100%"}}
                >
                    <p className={styles.einfo}>ID: #####</p>
                    <p className={styles.einfo}>Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, esse magni. Obcaecati itaque repellendus blanditiis nostrum, accusantium officia beatae alias suscipit quam ullam sit, reiciendis expedita? Optio praesentium voluptates dolorum.</p>


                    <div className={styles.eactions}>
                        <button>new attendance</button>
                        <p onClick={() => setHistoryPage(true)}>history</p>
                    </div>

                    <div className={styles.listbox}>
                        <div className={styles.listh}>
                            <p onClick={() => setAttendancePage(true)}>Most recent attendance list</p>
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
                </motion.div>
                <EventHistory isOpen={historypage} toggle={setHistoryPage}/>
            </div>
            <AttendanceList isOpen={attendancepage} toggle={setAttendancePage}/>
        </div>
    )
}