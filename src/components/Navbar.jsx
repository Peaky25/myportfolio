
import { AiOutlineDingtalk } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center place-content-center w-full	 h-20 px-4 text-slate-10  fixed drop-shadow-xl font-stick font-semibold text-xl   ">
      <div>
       < AiOutlineDingtalk size={60} className='animate-bounce'/>
      </div>

      <ul className="hidden md:flex">
          <li
            className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 "
          >
            <NavLink to="/">HOME</NavLink> 
            
          </li>

          <li
            className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
          >
          <NavLink to="/about">ABOUT</NavLink>
            
          </li>
        
          <li
            className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
          >
            <NavLink to="/experience">EXPERIENCE</NavLink>
            
          </li>
        
          <li
            className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
          >
            <NavLink to="/skills">SKILLS</NavLink> 
            
          </li>
        
          <li
            className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
          >
            <NavLink to="/contact">CONTACT</NavLink> 
            
          </li>
        
        
      </ul>

      

     </div>
  );
};

export default NavBar;