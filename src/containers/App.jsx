import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Security from "../pages/Security";
import EditTemplate from "../pages/EditTemplate";
import Event from "../pages/Event";
import Store from "../redux/Store/store";

function App() {

  return (
    <>
      <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Login></Login>} > </Route>
          <Route path="/register" element={<Register></Register>} > </Route>
          <Route path="/profile" element={<Profile></Profile>} > </Route>
          <Route path="/security" element={<Security></Security>} > </Route>
          <Route path="/EditTemplate" element={<EditTemplate></EditTemplate>}></Route>
          <Route path="/event" element={<Event/>} />
        </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
