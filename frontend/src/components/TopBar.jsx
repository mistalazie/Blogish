import { Link } from "react-router-dom";

export const TopBar = () => {
    return (
        <>
            <div>
                <nav className="flex p-3 bg-gray-200 drop-shadow-md items-center sticky  h-20 top-0 z-10">
                    <div className="flex w-[60vh] justify-center font-bold text-4xl drop-shadow-lg">BlogPost</div>
                    <label class="relative block w-96 mr-20">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </span>
                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white focus:ring-gray-400 focus:ring-2 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                    </label>
                    <ul className="flex w-[60vh] justify-evenly text-lg font-semibold ml-20 ">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="w-96 flex justify-evenly">
                        <div>
                            <Link to="/signin" className="w-24 text-lg font-semibold ml-36">Log in</Link>
                        </div>
                        <div className="rounded-xl bg-gray-800 w-24 text-lg text-white font-semibold text-center ml-4">
                            <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </div>
                </nav>
            </div>
        </>
    );
};
