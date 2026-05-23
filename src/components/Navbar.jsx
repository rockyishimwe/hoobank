import {useState} from "react";
import {close,logo,menu} from "../assets";
import {navLinks} from "../constants";
const Navbar = () => {
    const [active,setActive] = useState("Home");
    const [toggle,setToggle] = useState(false);
    return(
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>
        </nav>
    )
}