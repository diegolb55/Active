import { motion, AnimatePresence } from "framer-motion"
import { RxCross1 } from "react-icons/rx"
import styles from "@/styles/JoinEvent.module.css"

export default function JoinEvent({ isOpen, close }) {


    return (
        <motion.div className={styles.joinpopup}
            animate={isOpen ? {left: 0} : {left: "100%"}}
        >
            <div className={styles.headingbar}>
                <h4>Other Events</h4>
                <RxCross1 onClick={() => close(false)}/>
            </div>
        </motion.div>
    )
}