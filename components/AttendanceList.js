import styles from "@/styles/AttendanceList.module.css"
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"


import GetAttendeeNames from "@/utils/GetAttendeeNames"
import TMToDateFormat from "@/utils/TMToDateFormat"


export default function AttendanceList({ event, att, isOpen, toggle}){

    const names = GetAttendeeNames(att?.attendees);

    const attendancelist = () => {

        return (
            names?.map(
                name => 
                <div className={styles.guestbox} key={Math.random()}>
                    <div className={styles.avatar}></div>
                    <div className={styles.ginfo}>
                        <p>{name}</p>
                        {/* <p>user identification number</p> */}
                    </div>
                </div>
            )
        )
    }




    return (
        <motion.div className={styles.alist}
            animate={isOpen ? { top:0 } : { top:"100%" }}
        >

            <IoIosArrowDown className={styles.exitlist} 
                onClick={() => toggle(false)} />
            <h3>Attendance List</h3>

            <div className={styles.ainfo}>
                <p>present: {att?.present} / {att?.capacity}</p>
                <p>date: { TMToDateFormat(att?.date) }</p>
            </div>
            <p>Sort by</p>
            <div className={styles.listbox}>
                { attendancelist() }
               
            </div>

        </motion.div>
    )
}