import { motion, AnimatePresence } from "framer-motion"
import { RxCross1 } from "react-icons/rx"
import { useState, useEffect } from "react"
import styles from "@/styles/SearchEvent.module.css"

import JoinEvent from "./JoinEvent"
import AvailableEvents from "@/utils/AvailableEvents"
import { GetEventById } from "@/utils/GetEventById"

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

    useEffect(()=> {
        console.log("selected E", selectedEvent);
    }, [selectedEvent])

    // search bar functionality
    const [searchInput, setSearchInput] = useState("");
    const searchUsers = () => {
        if (searchInput){
            return (
            
                available?.filter( event => event.name.includes(searchInput) != "")
                .map( event =>
                    <div key={Math.random()} onClick={() => selectEvent(event) }>
                        <p>{ event.name }</p>
                        <p>{ event.id }</p>
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

            <motion.div 
                className={styles.searchinfo}
                animate={joinpage ? {left:"-100vw"} : {left:0} }
            >
            
                <h4>Other Available Events</h4>
                

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
            />
        </motion.div>
    )
}