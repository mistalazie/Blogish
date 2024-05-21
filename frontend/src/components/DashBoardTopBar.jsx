import { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react';
import Logo from "../assets/{0CF3F26B-DB03-46A0-A12F-27E38C050A87}-cutout.png"


export const DasbBoardTopBar = ({ }) => {

    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <nav className="flex justify-between h-16 bg-gray-200 items-center drop-shadow-md">
                <div className="flex bg-gray-400 h-full items-center justify-center w-96 sm:w-1/2">
                    <img src={Logo} className="w-7 h-7"></img>
                    <div className="font-bold text-3xl ml-1">
                        BlogPost
                    </div>
                </div>
                <div className="sm:hidden">
                    <Hamburger />
                </div>
                <div className="h-full bg-green-100 sm:w-3/5 hidden sm:inline-block">
                    <ul className="flex justify-evenly items-center pt-5">
                        <li>
                            <Link to="/dashboard">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="sm:w-1/3 justify-evenly hidden sm:inline-block">
                    <div className="flex justify-evenly items-center">
                        <div className="mr-5"><Link to="/create">Write</Link></div>
                        <div className="h-10 w-24 bg-black text-white items-center text-center justify-center flex rounded-lg"><Link to="/user">User</Link></div>
                    </div>
                </div>
                <div className="h-full flex justify-center items-center bg-gray-600 w-16 sm:w-32">
                    icon
                </div>
            </nav>
        </div>
    );
};
