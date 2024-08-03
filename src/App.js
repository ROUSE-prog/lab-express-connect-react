import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

function App () {
  return <>
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/logs" element={<Index />}/>
        <Route path="/logs/:id" element={<Show />}/>
        <Route path="/logs/new" element={<New />} />
        <Route path="/logs/:id/edit" element={<Edit />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  </>
}

export default App;
