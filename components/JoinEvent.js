import styles from "@/styles/JoinEvent.module.css"
import { motion } from "framer-motion"
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io"
import { auth } from "@/firebase";

import AddGuest from "@/utils/AddGuest";

export default function JoinEvent({ event, isOpen, toggle, toggleSearch}){
    
    
    const [passcode, setPasscode] = useState("");

    const handleJoin = () => {
        if(passcode === event?.passcode){
            // add user id to guest array
            AddGuest(event?.id, auth?.currentUser.uid);
            toggle(false);
            toggleSearch(false);
        }
    }


    return (
        <motion.div className={styles.joinpopup}
            animate={isOpen ? {left: 0} : {left:"100%"}}
        >

            <div className={styles.headingbar}>
                <IoIosArrowBack/>
                <h4 onClick={() => toggle(false)}>Other Available Events</h4>
            </div>

            <h3>{ event?.name }</h3>
            <h4>Event Id: </h4>
            <p>{ event?.id} </p>
            <h4>Event Description:</h4>
            <p>{ event?.description }</p>
            <h4>Mean Status:</h4>
            <p>20 / 50</p>

            <br/>


           
            
            <div style={{ display:"flex", padding: 20,
                flexDirection:"column"
            }}>
                <p>enter registration passcode: </p>
                <input type="text" 
                    value={passcode}
                    onChange={ (e)=>setPasscode(e.target.value) }
                />
                <button 
                onClick={()=>handleJoin()}
                
                    style={{
                        width: "fit-content",
                        padding:"10px 20px",
                        borderRadius:25,
                        alignSelf:"flex-end"
                }}>Join</button>
            </div>
                


        </motion.div>
    )
}
