import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EditTemplate from "../pages/EditTemplate";
import EventPublic from "../pages/EventPublic";
import Store from "../redux/Store/store";
import EventPrivate from "../pages/EventPrivate";
import Segurity from "../pages/Segurity";
import InvitationPrivate from "../pages/InvitationPrivate";
import InvitationPublic from "../pages/InvitationPublic";

function App() {

  return (
    <>
      <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/segurity" element={<Segurity/>}/>
          <Route path="/eventp" element={<EventPublic/>} />
          <Route path="/eventpr" element={<EventPrivate/>} />
          <Route path="/EditTemplate" element={<EditTemplate/>} />
          <Route path="/invitationPri" element={<InvitationPrivate/>} />
          <Route path="/invitationPu" element={<InvitationPublic/>} />
        </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
