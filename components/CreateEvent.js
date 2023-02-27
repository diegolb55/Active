import { motion, AnimatePresence } from "framer-motion"
import { RxCross1 } from "react-icons/rx"
import styles from "@/styles/CreateEvent.module.css"

export default function CreateEvent({ isOpen, close }) {


    return (
        <motion.div className={styles.createpopup}
            animate={isOpen ? {left: 0} : {left: "100%"}}
        >
            <div className={styles.headingbar}>
                <h4>Creating new Event</h4>
                <RxCross1 onClick={() => close(false)}/>
            </div>
        </motion.div>
    )
}