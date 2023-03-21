import styles from "@/styles/NewAttendanceList.module.css"
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"
import { useState, useEffect, useRef } from "react"
import AddEventAttendance from "@/utils/AddEventAttendance"


import MyDateTimePicker from "@/utils/MyDateTimePicker"
import { Timestamp } from "firebase/firestore"

export default function NewAttendanceList({ event, isOpen, toggle}) {

    const [passcode, setPasscode] = useState("")
    const [checkin, setCheckin] = useState({  barcode:false, passcode:false, })
    const updateCheckin = e => {
        const {id, checked} = e.target;
        setCheckin((prevState) => ({
            // Retain the existing values
            ...prevState,
            // update the current field
            [id]: checked,
        }));
    }
   
    const [capacity, setCapacity] = useState();
    const [selectedDate, setSelectedDate] = useState( null );
    const [selectedExpiration, setSelectedExpiration] = useState( null );

    const handleSubmit = (e) => {
        e.preventDefault();        

        if(selectedDate  && selectedExpiration){
            let date = Timestamp.fromDate(selectedDate);
            let expiration = Timestamp.fromDate(selectedExpiration);
            
            AddEventAttendance(event.id, checkin, passcode, capacity, date, expiration);
            setCapacity('');

            toggle(false);
        }
    }

    return (
        <motion.div className={styles.newalist}
            animate={isOpen ? { top:0 } : { top:"100%" }}

        >

            <IoIosArrowDown className={styles.exitlist} 
                onClick={() => {
                    setCapacity('');
                    toggle(false);
                }} />
            <h3>New Attendance List</h3>

            <form action="" onSubmit={(e)=>handleSubmit(e)}>

                <div className={styles.qbox}>
                    <p>Allow registration via:</p>
                    <div>
                        <input type="checkbox" 
                            name="checkin"
                            id="barcode"
                            checked={checkin.barcode}
                            onChange={ updateCheckin }
                            disabled={true}
                        />
                        <label htmlFor="">barcode</label>
                    </div>

                    <div>
                        <input type="checkbox" 
                            name="checkin"
                            id="passcode"
                            checked={checkin.passcode}
                            onChange={ updateCheckin }
                        />
                        <label htmlFor="">passcode</label>

                        {
                            checkin.passcode ?
                                <input type="text" 
                                    value={passcode}
                                    onChange={(e)=>setPasscode(e.target.value)}
                                />
                            :
                                <></>
                        }
                    </div>
                   
                </div>
                
                
                {/* <div className={`${styles.locations} ${styles.qbox}`}>
                    <p>Choose presetted location:</p>

                    <input type="text" />
                </div> */}

                <div className={styles.qbox}>
                    <label htmlFor="">Max Cap.</label>
                    <input type="text" 
                        value={capacity}
                        placeholder="previous cap: 50"
                        onChange={(e) => setCapacity(e.target.value)}
                    />
                    
                </div>

                <div className={styles.qbox}>
                    

                    <MyDateTimePicker value={selectedDate} onChange={setSelectedDate} label={"attendance date"}/>



                </div>
                <div className={styles.qbox}>
                    <MyDateTimePicker value={selectedExpiration} onChange={setSelectedExpiration} label={"expiration date"}/>

                </div>

                <button>Create new attendance</button>
                
            </form>







        </motion.div>
    )
}