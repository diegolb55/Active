import styles from "@/styles/JoinEvent.module.css"
import { motion } from "framer-motion"
import { IoIosArrowBack } from "react-icons/io"

export default function JoinEvent({ isOpen, toggle}){
    return (
        <motion.div className={styles.joinpopup}
            animate={isOpen ? {left: 0} : {left:"100%"}}
        >

            <div className={styles.headingbar}>
                <IoIosArrowBack/>
                <h4 onClick={() => toggle(false)}>Other Events</h4>
            </div>
        </motion.div>
    )
}
