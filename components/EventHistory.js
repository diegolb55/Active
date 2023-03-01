import styles from "@/styles/EventHistory.module.css"
import { motion } from "framer-motion"
import { IoIosArrowBack } from "react-icons/io"
import { AiOutlineEye } from "react-icons/ai"


export default function EventHistory({ isOpen, toggle, toggleAtt }){
    

    const lists = () => {
        return (
            <div className={styles.abox}>
                <div>
                    <p>date: 00/00/00</p>
                    <p>10 / 50</p>
                </div>
                <AiOutlineEye 
                    onClick={() => toggleAtt(true)}
                    style={{fontSize:"1.5rem"}}/>

            </div>
        )
    }
    
    return (
        <motion.div className={styles.ehistory}
            animate={isOpen ? {left: 0} : {left: "100vw"}}
        >
            <div className={styles.exith} onClick={() => toggle(false)}>
                <IoIosArrowBack style={{fontSize:"1.5rem"}}/>
                <h3>Event name</h3>
            </div>

            <p>Recorded attendances</p>
            <div className={styles.alist}>
                { lists() }
                { lists() }
                { lists() }
                { lists() }
                { lists() }
                { lists() }
                { lists() }
                { lists() }

            </div>

        </motion.div>
    )
}