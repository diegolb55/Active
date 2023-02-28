import { motion, AnimatePresence } from "framer-motion"
import { RxCross1 } from "react-icons/rx"
import { FiPlusCircle } from "react-icons/fi"

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
            <form action="">
                

                <div>
                    <p>Event name</p>
                    <input type="text" />

                    <p htmlFor="">Event search id</p>
                    <input type="text" />

                    
                    <p htmlFor="">event description</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                

                    <p htmlFor="">event location</p>
                    <input type="text" />
                    <input type="text" />
                    <FiPlusCircle/>
                </div>

                <button>create</button>
            </form>

        </motion.div>
    )
}