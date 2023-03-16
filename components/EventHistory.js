import styles from "@/styles/EventHistory.module.css"
import { motion } from "framer-motion"
import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineEye } from "react-icons/ai"
import { useState } from "react"

import GetEventAttendances from "@/utils/GetEventAttendances"
import TMToDateFormat from "@/utils/TMToDateFormat"


export default function EventHistory({ event, isOpen, toggle, toggleAtt, changeAtt }){
    
    const attendances = GetEventAttendances(event.id);
    // console.log(attendances[0].attendees)

    const handleOpenAtt = (att) => {

        changeAtt(att);
        toggleAtt(true);

    }
    const showAttendances = () => {

        return (
            attendances?.map(
                att => 
                <div key={Math.random()} className={styles.abox}>
                    <div>
                        <p>{ TMToDateFormat(att.date) }</p>
                        <p>assistance: {att.present} / {att.capacity} </p>
                    </div>
                    <AiOutlineEye 
                        onClick={ () => handleOpenAtt(att) }
                        style={{fontSize:"1.5rem"}}
                    />
                </div>
            )
        )
    }
    
    return (
        <motion.div className={styles.ehistory}
            animate={isOpen ? {left: 0} : {left: "100vw"}}
        >
            <div className={styles.exith} onClick={() => toggle(false)}>
                <IoIosArrowBack style={{fontSize:"1.5rem"}}/>
                <h3>{ event.name }</h3>
            </div>

            <p>Recorded attendances</p>
            <div className={styles.alist}>

                { showAttendances() }
                
            </div>

        </motion.div>
    )
}