import { motion, AnimatePresence } from "framer-motion"
import { RxCross1 } from "react-icons/rx"
import { useState } from "react"
import styles from "@/styles/SearchEvent.module.css"

import JoinEvent from "./JoinEvent"

export default function SearchEvent({ isOpen, close }) {

    const [joinpage, setJoinPage] = useState(false);

    return (
        <motion.div className={styles.searchpopup}
            animate={isOpen ? {left: 0} : {left: "100%"}}
        >
            <RxCross1 className={styles.exitsearch} 
                onClick={() => {
                    setJoinPage(false);
                    close(false);
                }}
            />

            <motion.div 
                className={styles.searchinfo}
                animate={joinpage ? {left:"-100vw"} : {left:0} }
            >
            
            <h4>Other Events</h4>
            

            <input className={styles.search} type="text" placeholder="search events"/>

            <div className={styles.results}>
                <div onClick={() => setJoinPage(true)}>
                    <p>Event D</p>
                    <p>ID number</p>
                </div>
                <div onClick={() => setJoinPage(true)}>
                    <p>Event D</p>
                    <p>ID number</p>
                </div>
                <div onClick={() => setJoinPage(true)}>
                    <p>Event D</p>
                    <p>ID number</p>
                </div>
                <div onClick={() => setJoinPage(true)}>
                    <p>Event D</p>
                    <p>ID number</p>
                </div>
                <div onClick={() => setJoinPage(true)}>
                    <p>Event D</p>
                    <p>ID number</p>
                </div>
                <div onClick={() => setJoinPage(true)}>
                    <p>Event D</p>
                    <p>ID number</p>
                </div>
                
        
                
            </div>
            </motion.div>

            <JoinEvent isOpen={joinpage} toggle={setJoinPage}/>
        </motion.div>
    )
}