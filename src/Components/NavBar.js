import { Link } from "react-router-dom";

export default function NavBar () {

    return <>
        <Link to={"/logs"}><button>All logs</button></Link>
        <Link to={"/logs/new"}><button>Create A New Log</button></Link>
        <Link to={"/"}><button>Home</button></Link>
    </>
}