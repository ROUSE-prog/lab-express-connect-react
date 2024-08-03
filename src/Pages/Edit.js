import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Edit () {

    const {id} = useParams();

    const navigate = useNavigate();

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post:""
    })

    function handleText (e) {
        setLog({...log, [e.target.id]: e.target.value})
    }

    useEffect(() => {
        fetch(`http://localhost:3308/logs/${id}`)
        .then(res => res.json())
        .then(resJSON => setLog(resJSON))
        .catch(error => console.error(error))
    }, [id])

    function editLog () {
        fetch(`http://localhost:3308/logs/${id}`, {
          method: "PUT",
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
        editLog();
        setLog({
            captainName: "",
            title: "",
            post:""
        })
    }
    return (
        <>
            Edit Log
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