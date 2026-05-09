import { NavLink, useNavigate } from "react-router-dom";
import { getLoggedInUser, isLoggedIn, logoutUser } from "../api/UserAPI";


export const Navbar = () => {
  const navigate = useNavigate();
  const isLogin = isLoggedIn();
  const username = getLoggedInUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login/");
  };

  return (
    <>
    <div className="border p-3.5 rounded-2xl">
      <nav className="flex items-center justify-between text-2xl">
        <NavLink to='/' className={({ isActive }) =>isActive ? "text-red-500" : "text-white"}>Home</NavLink>
        {isLogin ? (
          <div className="flex items-center gap-6">
            <span className="text-white text-lg">Hi, {username}</span>
            <button type="button" onClick={handleLogout} className="text-white cursor-pointer">
              Logout
            </button>
          </div>
        ) : 
        <div className="flex gap-6">
          <NavLink to='/register/' className={({ isActive }) =>isActive ? "text-red-500" : "text-white"}>Register</NavLink>
          <NavLink to='/login/' className={({ isActive }) =>isActive ? "text-red-500" : "text-white"}>Login</NavLink>
        </div>}
        
      </nav>
    </div>
      
    
    </>
  )
}
export default Navbar;
