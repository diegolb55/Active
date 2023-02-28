import Link from "next/link"

export default function Logo(){
    return (
        <Link href="/" style={{
            border:"3px solid lightgray",
            background: "white",
            borderRadius:"100%",
            height: 50,
            width: 50,
            display:"block",
            
        }}>
            
        </Link>
    )
}