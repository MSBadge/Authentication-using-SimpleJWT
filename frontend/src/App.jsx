import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import { Register } from "./components/Register"
import { Login } from "./components/Login"
import Navbar from "./components/Navbar"
import { isLoggedIn } from "./api/UserAPI"

const PrivateRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login/" replace />
}


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      <Route path="/register/" element={<Register/>}/>
      <Route path="/login/" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
