import { useState } from "react"
import { NavLink } from "react-router-dom";

function Header() {
    const [open, setIsOpen] = useState(false);
    const handleIsOpen=()=>{
        setIsOpen(true)
    }
    const handleIsClose=()=>{
        setIsOpen(false)
    }

    return (
        <div>
            <div className="flex justify-between items-center bg-green-950 px-12 py-4 text-white fixed z-20 w-full">

                <h1 className="text-3xl font-bold">JM9</h1>
                {/* Shashada weyn */}
                <div className="flex gap-10 items-center text-2xl">
                    <ul className="sm:flex mr-64 gap-12 hidden">
                      <NavLink to="/">  <li>Home</li> </NavLink>
                      <NavLink to="/About">  <li>About</li> </NavLink>
                      <NavLink to="/Contact">  <li>contact us</li> </NavLink>
                    </ul>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i style={{
                        display : open === true ? "none" : ""
                    }} onClick={handleIsOpen} className="fa-solid fa-bars sm:hidden flex"></i>
                    <i style={{
                        display : open === true ? "block" : ""
                    }} onClick={handleIsClose} className="fa-solid fa-x hidden"></i>
                </div>

            </div>
            {/* Mobile  */}
            <div style={{
                display: open===true ? "block"  : ""
            }} className="hidden  gap-10 items-center text-2xl">
                <ul className="  gap-12 flex flex-col bg-green-950 w-full text-white -mt-[0.5px] text-center p-8">
                  <NavLink to="/">  <li>Home</li> </NavLink>
                  <NavLink to="/About">  <li>About</li> </NavLink>
                  <NavLink to="/Contact">  <li>contact us</li> </NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Header