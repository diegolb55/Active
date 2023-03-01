import styles from "@/styles/RegisterAttendance.module.css"
import { motion } from "framer-motion"
import { BiLocationPlus } from "react-icons/bi"

export default function RegisterAttendance({ isOpen, toggle }){
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
                    <p>date: 00/00/00: </p>
                    <button>register</button>
                </div>
            </form>

        </motion.div>
    )
}