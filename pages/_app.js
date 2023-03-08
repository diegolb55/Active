import '@/styles/globals.css'
import Authentication from '@/components/authentication/Authentication'
import {auth} from "@/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';

export default function App({ Component, pageProps }) {


  // Authentication State:
  const [ user, loading, error] = useAuthState(auth);
  if (!user){
    if (loading){
      return <h3>Loading</h3>
    }
    return <Authentication/>
  }


  return <Component {...pageProps}/>
}
