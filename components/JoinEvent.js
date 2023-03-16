import styles from "@/styles/JoinEvent.module.css"
import { motion } from "framer-motion"
import { IoIosArrowBack } from "react-icons/io"

export default function JoinEvent({ event, isOpen, toggle}){
    
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
            <p>You are not a participant in this event. Click here to join</p>


            <button>Join</button>
        </motion.div>
    )
}
