import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useState } from 'react';
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EditTemplate from "../pages/EditTemplate";
import EventPublic from "../pages/EventPublic";
import EventPrivate from "../pages/EventPrivate";
import Segurity from "../pages/Segurity";
import NotFound from "../pages/NotFound";
import UserContext from "../context/UserContext";
import RouteProtected from "./RouterProtected";
import InvitationPublic from "../components/organism/InvitationPublic";


function App() {
  const [isLoged, setIsLoged] = useState(
    () => window.localStorage.getItem("loggedUser") !== null
  );

  const [userName, setUserName] = useState(
    () => {
      const loggedUser = window .localStorage.getItem("loggedUser");
      return loggedUser ? JSON.parse(loggedUser).nameuser : "";
    }
  );
  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{ isLoged, setIsLoged, userName, setUserName }}>
        <Routes>
          <Route path="/" element={<Login/>} />

          <Route path="/register" element={<Register/>} />

          <Route element={<RouteProtected session={isLoged}/>}>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/security" element={<Segurity/>}/>
          <Route path="/eventp" element={<EventPublic/>} />
          <Route path="/eventpr" element={<EventPrivate/>} />
          <Route path="/EditTemplate" element={<EditTemplate/>} />
          </Route>

          <Route path="/*" element={<NotFound/>} />
          <Route path="/ip" element={<InvitationPublic />} />

        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
