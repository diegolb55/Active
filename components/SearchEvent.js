import { motion, AnimatePresence } from "framer-motion"
import { RxCross1 } from "react-icons/rx"
import { useState, useEffect } from "react"
import styles from "@/styles/SearchEvent.module.css"

import JoinEvent from "./JoinEvent"
import AvailableEvents from "@/utils/AvailableEvents"
import { GetEventById } from "@/utils/GetEventById"
import { IoIosArrowBack } from "react-icons/io"

export default function SearchEvent({ isOpen, close }) {

    // toggle the join page
    const [joinpage, setJoinPage] = useState(false);

    // array of all the events that hold no relation to auth user
    const available = AvailableEvents();

    // event to pass to the join page
    const [selectedEvent, setSelectedEvent] = useState({});

    // handle event click
    const selectEvent = (event) => {
        setSelectedEvent(event);
        setJoinPage(true);
    }

   

    // search bar functionality
    const [searchInput, setSearchInput] = useState("");
    const searchUsers = () => {
        if (searchInput){
            return (
                available?.filter( event => event.name.includes(searchInput) != "")
                .map( event =>
                    <div key={Math.random()} onClick={() => selectEvent(event) }>
                        <p>{ event.name }</p>
                    </div>
                ) 
            )
        }
    }

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


            {
                joinpage ? 
                <div className={styles.headingbar}>
                    <IoIosArrowBack/>
                    <h4 onClick={() => setJoinPage(false)}>Other Available Events</h4>
                </div>
                :
                <h4>Other Available Events</h4>

            }
            

            <motion.div 
                className={styles.searchinfo}
                animate={joinpage ? {left:"-100vw"} : {left:0} }
            >
            
                

                <input className={styles.search} 
                    type="text" 
                    placeholder="search events" 
                    autoComplete="off"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />

                <div className={styles.results}>
                
                    { searchUsers() }
                    
                </div>
            </motion.div>

            <JoinEvent isOpen={joinpage} toggle={setJoinPage}
                event={selectedEvent}
                toggleSearch={close}
            />
        </motion.div>
    )
}