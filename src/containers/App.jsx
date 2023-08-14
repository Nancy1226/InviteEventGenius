import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} > </Route>
          <Route path="/register" element={<Register></Register>} > </Route>
          <Route path="/profile" element={<Profile></Profile>} > </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
