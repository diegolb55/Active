
import {useState} from "react"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '@/firebase'
import { doc, setDoc, collection, setIndexConfiguration, addDoc } from "firebase/firestore";
import styles from "@/styles/authentication/Authentication.module.css"


export default function SignUp({setSignUpPage}){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword,] = useCreateUserWithEmailAndPassword(auth);

    const createUser = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
        .then(function(userCredentialImpl){
            setDoc(doc(db, "users", userCredentialImpl?.user.uid), {
                name : name,
                email : email,
            })
        })
       
    }
    return (
        <div className={styles.authpage}>
            <h1>Active.</h1>
            <p>attendance system.</p>
            
            <form className={styles.authbox} onSubmit={ createUser }>
                <label htmlFor="name">name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                />
                
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                />
                <label htmlFor="password">password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                />
                <div className={styles.actionbox}>
                    <button 
                        type="submit"
                    > Sign In
                    </button>

                    <p>Or login by <span 
                        className={styles.toggle}
                        onClick={ () => setSignUpPage(false) }
                    >
                        LogIn
                        </span>
                    </p> 
                    
                </div> 
                
            </form>
               
                
        </div>
    )
}