import { useState } from "react"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
    const [open, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(true)
    }
    const handleIsClose = () => {
        setIsOpen(false)
    }

    const Counter = useSelector((e) => e.newCounter.item)


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
                    <i className="fa-solid fa-cart-shopping"><span className="absolute top-2 text-[15px]">({Counter})</span></i>
                    <i style={{
                        display: open === true ? "none" : ""
                    }} onClick={handleIsOpen} className="fa-solid fa-bars sm:hidden flex"></i>
                    <i style={{
                        display: open === true ? "block" : ""
                    }} onClick={handleIsClose} className="fa-solid fa-x hidden"></i>
                </div>
            </div>
            {/* Mobile  */}
            <div style={{
                display: open === true ? "block" : ""
            }} className="hidden  gap-10 items-center text-2xl">
                <ul className="  gap-12 flex flex-col bg-green-950 w-full text-white pt-20 text-center p-8">
                    <NavLink to="/">  <li>Home</li> </NavLink>
                    <NavLink to="/About">  <li>About</li> </NavLink>
                    <NavLink to="/Contact">  <li>contact us</li> </NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Header