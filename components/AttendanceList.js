import styles from "@/styles/AttendanceList.module.css"
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"


export default function AttendanceList({isOpen, toggle}){


    const guest = () => {
        return (
            <div className={styles.guestbox}>
                <div className={styles.avatar}></div>
                <div className={styles.ginfo}>
                    <p>guest name</p>
                    <p>user identification number</p>
                </div>
            </div>
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
                <p>present: 10 / 50</p>
                <p>date: 00/00/00</p>
            </div>
            <p>Sort by</p>
            <div className={styles.listbox}>
                { guest() }
                { guest() }
                { guest() }
                { guest() }
                { guest() }
                { guest() }
                { guest() }
                { guest() }

            </div>

        </motion.div>
    )
}