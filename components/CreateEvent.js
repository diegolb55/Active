import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { RxCross1 } from "react-icons/rx"
import { FiPlusCircle } from "react-icons/fi"

import styles from "@/styles/CreateEvent.module.css"
import AddEvents from "@/utils/AddEvents"

import { db, auth } from '@/firebase';


export default function CreateEvent({ isOpen, close }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [passcode, setPasscode] = useState('');
    
    const [register, setRegister] = useState({  barcode:false, passcode:false, })
    const updateRegister = e => {
        const {id, checked} = e.target;
        setRegister((prevState) => ({
            // Retain the existing values
            ...prevState,
            // update the current field
            [id]: checked,
        }));
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        AddEvents(name, description, location, register, passcode);

        setName("");
        setDescription("");
        setLocation("");
        close(false);
    }


    return (
        <motion.div className={styles.createpopup}
            animate={isOpen ? {left: 0} : {left: "100%"}}
        >

            <RxCross1 className={styles.exit } onClick={() => close(false)}/>
            <h4>New Event</h4>

            
            <form action="" onSubmit={ (e) => handleSubmit(e) }>
                

                    <p>Event name:</p>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        required 
                    />

                    <p htmlFor="">event description:</p>

                    <textarea id="description" cols="30" rows="10"
                        value={description}
                        onChange={ (e)=> setDescription(e.target.value) }
                        required
                    ></textarea>
                

                    <p htmlFor="">event location:</p>

                    <input type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        id="name"
                        required 
                    />
                    {/* <input type="text" />
                    <FiPlusCircle/> */}
                    
                    <p>Allow guest registration via:</p>

                    <div className={styles.qbox}>
                        
                        <div>
                            <input type="radio" 
                                id="barcode"
                                name="register"
                                checked={register.barcode}
                                onChange={updateRegister}
                                disabled={true}
                            />
                            <label htmlFor="">barcode</label>
                        </div>

                        <div>
                            <input type="radio" 
                            
                                id="passcode"
                                name="register"

                                checked={register.passcode}
                                onChange={updateRegister}
                                required
                            />
                            <label htmlFor="">passcode</label>

                        </div>
                        { register.passcode ? 
                            <input type="text" 
                                value={passcode}
                                onChange={(e)=> setPasscode(e.target.value)}
                            />
                            :
                            <></>
                        }
                        
                    </div>

                <button type="submit" >create</button>
            </form>

        </motion.div>
    )
}