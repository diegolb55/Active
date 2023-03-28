import Link from "next/link"
import { AiFillHome } from "react-icons/ai"

export default function Logo(){
    return (
        <Link href="/" style={{
            background: "lightgray",
            color:"white",
            borderRadius:"100%",
            height: 50,
            width: 50,
            display:"block",
            display: "flex",
            justifyContent:"center",
            alignItems:"center"
            
        }}>
            <AiFillHome/>
        </Link>
    )
}