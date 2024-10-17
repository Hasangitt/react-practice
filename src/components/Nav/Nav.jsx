import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiTwotoneCloseSquare } from "react-icons/ai";

const Nav = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
      ];
      

    return (
        <div className="text-black bg-yellow-100 p-6">
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open ===  true ? <AiTwotoneCloseSquare className="text-4xl"></AiTwotoneCloseSquare> : <AiOutlineMenu className="text-4xl"></AiOutlineMenu>
            }
           
            </div>
            <ul className={`md:flex absolute bg-yellow-100 duration-1000 px-5 ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Nav;