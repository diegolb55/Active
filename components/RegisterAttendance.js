import styles from "@/styles/RegisterAttendance.module.css"
import { motion } from "framer-motion"
import { BiLocationPlus } from "react-icons/bi"
import { useState } from "react"
import TMToDateFormat from "@/utils/TMToDateFormat"
import Checkin from "@/utils/Checkin"


export default function RegisterAttendance({ isOpen, toggle, att, event}){

    const [passcode, setPasscode] = useState("");

    const handleCheckin = (e) => {
        e.preventDefault();

        if(att?.passcode === passcode){
            Checkin(event?.id, att?.id);
            toggle(false);
        }



    }

    return (
        <motion.div className={styles.regattpage}
            animate={isOpen ? {left: 0} : {left: "100vw"}}

        >

            <p>Event ID: {event.id}</p>
            <form action="" onSubmit={(e)=>handleCheckin(e)}>
                <p>Validate attendance: </p>
                <div>

                    {/* <div className={styles.locationbox}>
                        <p>Location</p>
                        <BiLocationPlus/>
                        <input type="text" />
                    </div> */}

                    <label htmlFor="">passcode</label>
                    <input type="text" value={passcode}
                        onChange={(e)=>setPasscode(e.target.value)}
                    />
                </div>

                <div className={styles.datebtn}>
                    <p>date: {TMToDateFormat(att?.date)} </p>
                    <button type="submit">check in</button>
                </div>
            </form>

        </motion.div>
    )
}