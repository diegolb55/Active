import styles from "@/styles/EventHistory.module.css"
import { motion } from "framer-motion"
import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineEye } from "react-icons/ai"

import GetEventAttendances from "@/utils/GetEventAttendances"


export default function EventHistory({ event, isOpen, toggle, toggleAtt }){
    
    const attendances = GetEventAttendances(event.id);

    const timestampToDate = (timestamp) => {
        if(typeof timestamp ){
            let jsDate = timestamp?.toDate();
            let day = jsDate?.getDate();
            let month = jsDate?.getMonth() + 1;
            let year = jsDate?.getFullYear();

            return `${month}/${day}/${year}`
        }
        return "00/00/00"
    }

    const showAttendances = () => {

        return (
            attendances?.map(
                att => 
                <div key={Math.random()} className={styles.abox}>
                    <div>
                        <p>{ timestampToDate(att.date) }</p>
                        <p>assistance: {att.present} / {att.capacity} </p>
                    </div>
                    <AiOutlineEye 
                        onClick={() => toggleAtt(true)}
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