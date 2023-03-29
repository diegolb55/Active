import Head from "next/head";
import { useState } from "react"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase'
import styles from "@/styles/authentication/Authentication.module.css"



export default function Login({ setSignUpPage }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth)
    
        return (
            <div className={styles.authpage}>
                

                <h1>Active.</h1>
                <p>attendance system</p>
                
                
                <div className={styles.authbox}>
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
                            onClick={() => signInWithEmailAndPassword(email, password)}>
                            login
                        </button>
                        <p>Or create account by <span
                                className={styles.toggle} 
                                onClick={ () => setSignUpPage(true) }
                            >
                            SignUp
                            </span>
                        </p>
                            
                    </div>
                </div>
            </div>
        )
}