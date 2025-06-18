import { useEffect, useState } from "react";

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date())
        }, 1000)
    })

    return (
       <div>  {time.toLocaleTimeString()}</div>
    )
}
export default CurrentTime;