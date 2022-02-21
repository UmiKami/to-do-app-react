import { useEffect, useState } from "react"
import '../styles/Clock.css'

const Clock = () => {
    const [time, setTime] = useState()

    useEffect(()=>{
        setInterval(()=>{
            const today = new Date()
            setTime(today.toLocaleTimeString())
        },1000)
    },[])

    return <div className="time">
        <p>Time: {time}</p>
    </div>
}

export default Clock