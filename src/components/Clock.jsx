import { useEffect, useState } from "react"
import '../styles/Clock.css'

const Clock = () => {
    const [time, setTime] = useState()
    const date = new Date()
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    
    useEffect(()=>{
        setInterval(()=>{
            const today = new Date()
            setTime(today.toLocaleTimeString())
        },1000)
    },[])
    
    return <div className="time">
        <p>{`${days[date.getDay()]} ${date.getDate()}, ${time}`}</p>
    </div>
}

export default Clock