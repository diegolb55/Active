import styles from "@/styles/JoinEvent.module.css"
import { motion } from "framer-motion"
import { useState } from "react";
import { auth } from "@/firebase";

import AddGuest from "@/utils/AddGuest";
import { margin } from "@mui/system";

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

            

            <h3 className={styles.ename}>{ event?.name }</h3>
            
            <h4>Event Description:</h4>
            <p className={styles.desc}>&emsp;{ event?.description }</p>
            <div className={styles.meanb}>
                <h4>Mean Status:</h4>
                <p>20 / 50</p>
            </div>

            <br/>


           
            
            <div style={{ display:"flex", padding: 20,
                flexDirection:"column"
            }}>
                <p>Enter passcode and join register</p>
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
                        alignSelf:"flex-end",
                        margin:"20px 0"
                }}>Join</button>
            </div>
                


        </motion.div>
    )
}
