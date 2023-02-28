import styles from "@/styles/JoinEvent.module.css"
import { motion } from "framer-motion"
import { IoIosArrowBack } from "react-icons/io"

export default function JoinEvent({ isOpen, toggle}){
    
    return (
        <motion.div className={styles.joinpopup}
            animate={isOpen ? {left: 0} : {left:"100%"}}
        >

            <div className={styles.headingbar}>
                <IoIosArrowBack/>
                <h4 onClick={() => toggle(false)}>Other Events</h4>
            </div>

            <h3>Event Name</h3>
            <h4>Event Id: </h4>
            <p>############</p>
            <h4>Event Description:</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem maxime, sunt omnis atque optio consequuntur vero! Hic voluptates maiores rem, labore cumque ipsam reprehenderit vel. Nam voluptatibus molestiae libero!</p>
            <h4>Mean Status:</h4>
            <p>20 / 50</p>

            <br/>
            <p>You are not a participant in this event. Click here to join</p>


            <button>Join</button>
        </motion.div>
    )
}
