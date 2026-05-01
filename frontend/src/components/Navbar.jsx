import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../api/UserAPI";


export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(isLoggedIn());

  useEffect(() => {
    setIsLogin(isLoggedIn());
  }, [location.pathname]);

  const handleLogout = () => {
    logoutUser();
    setIsLogin(false);
    navigate("/login/");
  };

  return (
    <>
    <div className="border p-3.5 rounded-2xl">
      <nav className="flex justify-evenly text-2xl">
        <NavLink to='/' className={({ isActive }) =>isActive ? "text-red-500" : "text-white"}>Home</NavLink>
        {isLogin ? (
          <button type="button" onClick={handleLogout} className="text-white cursor-pointer">
            Logout
          </button>
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
