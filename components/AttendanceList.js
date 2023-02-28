import styles from "@/styles/AttendanceList.module.css"
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"


export default function AttendanceList({isOpen, toggle}){
    return (
        <motion.div className={styles.alist}
            animate={isOpen ? { top:0 } : { top:"100%" }}
        >

            <IoIosArrowDown onClick={() => toggle(false)} />

        </motion.div>
    )
}