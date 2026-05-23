import {useState} from "react";
import {close,logo,menu} from "../assets";
import {navLinks} from "../constants";
const Navbar = () => {
    const [active,setActive] = useState("Home");
    const [toggle,setToggle] = useState(false);
    return(
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav,index)=>(
                    <li className={`font-poppins font-normal cursor-pointer  text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    key={nav.id}
                    onClick={()=> setActive(nav.title)}>
                        <a href={`#${nav.id}`}>{nav.title}</a>                        
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close:menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={()=> setToggle(!toggle)}/>
            </div>
        </nav>
    )
}
export default Navbar;