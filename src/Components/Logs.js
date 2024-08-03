import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Logs () {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3308/logs")
        .then(res => res.json())
        .then(resJSON => setLogs(resJSON))
        .catch(error => console.error(error))
    }, []);

    console.log(logs)

    return ( 
        <>
            <div>
                {logs.map(log => <h1>Captain: {log.captainName}<Link to={`/logs/${log.id}`}><p> Title: {log.title}</p></Link><p>{log.post}</p><hr/></h1>)}
            </div>
        </>
    )
}