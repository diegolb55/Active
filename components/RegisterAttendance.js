import styles from "@/styles/RegisterAttendance.module.css"
import { motion } from "framer-motion"
import { BiLocationPlus } from "react-icons/bi"
import TMToDateFormat from "@/utils/TMToDateFormat"

export default function RegisterAttendance({ isOpen, toggle, att}){
    return (
        <motion.div className={styles.regattpage}
            animate={isOpen ? {left: 0} : {left: "100vw"}}

        >

            <p>Event ID: ####</p>
            <form action="">
                <p>Validate attendance: </p>
                <div>

                    <div className={styles.locationbox}>
                        <p>Location</p>
                        <BiLocationPlus/>
                        <input type="text" />
                    </div>

                    <label htmlFor="">passcode</label>
                    <input type="text" />
                </div>

                <div className={styles.datebtn}>
                    <p>date: {TMToDateFormat(att?.date)} </p>
                    <button>check in</button>
                </div>
            </form>

        </motion.div>
    )
}