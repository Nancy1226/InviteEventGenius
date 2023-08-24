import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EventPublic from "../pages/EventPublic";
import EventPrivate from "../pages/EventPrivate";
import InvitationPublic from "../components/organism/InvitationPublic";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} > </Route>
          <Route path="/register" element={<Register></Register>} > </Route>
          <Route path="/profile" element={<Profile></Profile>} > </Route>
          <Route path="/eventp" element={<EventPublic/>} />
          <Route path="/eventpr" element={<EventPrivate/>} />
          <Route path="/ip" element={<InvitationPublic/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
