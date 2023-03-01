import styles from "@/styles/NewAttendanceList.module.css"
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"


export default function NewAttendanceList({ isOpen, toggle}) {


    return (
        <motion.div className={styles.newalist}
            animate={isOpen ? { top:0 } : { top:"100%" }}

        >

            <IoIosArrowDown className={styles.exitlist} 
                onClick={() => {

                    toggle(false);
                }} />
            <h3>New Attendance List</h3>

            <form action="">

                
                <div className={styles.qbox}>
                    <p>Allow registration via:</p>
                    <div>
                        <input type="radio" name="registration"/>
                        <label htmlFor="">barcode</label>
                    </div>

                    <div>
                        <input type="radio" name="registration"/>
                        <label htmlFor="">passcode</label>
                    </div>
                    <div>
                        <input type="radio" name="registration"/>
                        <label htmlFor="">button</label>
                    </div>
                </div>
                
                
                <div className={`${styles.locations} ${styles.qbox}`}>
                    <p>Choose presetted location:</p>

                    <input type="text" />
                    {/* <input type="text" /> */}
                </div>

                <div className={styles.qbox}>
                    <label htmlFor="">Max Cap.</label>
                    <input type="text" placeholder="previous cap: 50"/>
                </div>

                <div className={styles.qbox}>
                    <label htmlFor="">Expiration date</label>
                    <input type="text" />
                </div>

                <button>Create new attendance</button>
                
            </form>







        </motion.div>
    )
}