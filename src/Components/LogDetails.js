import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

export default function LogDetails () {
    const navigate = useNavigate();
    const [ log, setLog ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3308/logs/${id}`)
        .then(res => res.json())
        .then(resJSON => setLog(resJSON))
        .catch(() => {
            navigate("/not-found")
        })
    }, [id, navigate]);

    function removeLog () {
        fetch(`http://localhost:3308/logs/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            navigate("/logs");
        })
    }

    return <>
        <h1>{log.id}</h1>
        <h1>{log.captainName}</h1>
        <h2>{log.title}</h2>
        <p>{log.post}</p>
        <button onClick={removeLog}>Delete</button>
        <Link to={`/logs/${id}/edit`}><button>Edit</button></Link>
    </>
}