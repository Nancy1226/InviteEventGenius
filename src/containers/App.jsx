import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EventPublic from "../pages/EventPublic";
import EventPrivate from "../pages/EventPrivate";
import Segurity from "../pages/Segurity";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/segurity" element={<Segurity/>}/>
          <Route path="/eventp" element={<EventPublic/>} />
          <Route path="/eventpr" element={<EventPrivate/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
