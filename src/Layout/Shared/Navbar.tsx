import { NavLink } from "react-router-dom";
import { useTheme } from "../Provider/ThemeContext";
import { useTheme1 } from "../Provider/NormalContext";



const Navbar: React.FC = () => { //This ensures proper typing for functional components.
    const {theme, toggleTheme} = useTheme();
    console.log(theme)
    const handleTheme = () => {
        toggleTheme();
        console.log(theme)
    }
    const {gender, food} = useTheme1();
    console.log(gender)
    food()
    console.log(gender)

    const nav1 = (<>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
            <NavLink to="/About">About</NavLink>
        </li>
        <li>
            <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
            <NavLink to="/Registration">Registration</NavLink>
        </li>
        <li>
            <button onClick = {handleTheme}>changetheme</button>
        </li>

    </>)
    return (
        <div className="navbar bg-base-100 shadow-sm"style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            padding: "20px",
          }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav1}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nav1}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;