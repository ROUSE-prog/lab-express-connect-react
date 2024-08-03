import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function New () {

    const navigate = useNavigate();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post:""
    })

    function handleText (e) {
        setLog({...log, [e.target.id]: e.target.value})
    }

    function addLog () {
        fetch(`http://localhost:3308/logs`, {
          method: "POST",
          body: JSON.stringify(log),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(() => {
          navigate("/logs")
        })
        .catch(error => console.error(error))
    }

    function handleSubmit (e) {
        e.preventDefault();
        addLog();
        setLog({
            captainName: "",
            title: "",
            post:""
        })
    }

    return (
        <>
            Create a New Log
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain Name: </label>
                <input id="captainName" type="text" value={log.captainName} onChange={handleText}/>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" value={log.title} onChange={handleText}/>
                <label htmlFor="post">Content: </label>
                <textarea id="post" type="text" value={log.post} onChange={handleText}></textarea>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}