import { useState } from "react";
import Link from "../Link/Link";
import { MdMenuOpen } from "react-icons/md";
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [open,setOpen]= useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:id', name: 'Profile' }
      ];
    return (
        <nav className="text-black bg-yellow-200 p-6">
           <div className="md:hidden" onClick={() => setOpen(!open)}>
            {
                open === true ? <AiOutlineClose></AiOutlineClose> :<MdMenuOpen className="text-2xl "></MdMenuOpen>
            }
           
           </div>
           <ul className={`md:flex duration-2000 absolute md:static
           ${open ? 'top-16': '-top-60'}
             bg-yellow-200 px-6`}>
           {
                routes.map(route => <Link key={route.id} route = {route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;