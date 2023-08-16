import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Security from "../pages/Security";
import EditTemplate from "../pages/EditTemplate";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} > </Route>
          <Route path="/Register" element={<Register></Register>} > </Route>
          <Route path="/Profile" element={<Profile></Profile>} > </Route>
          <Route path="/Security" element={<Security></Security>} > </Route>
          <Route path="/EditTemplate" element={<EditTemplate></EditTemplate>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
