import { Link } from "react-router-dom"
import { About } from "../pages/About"

export const TopBar = () => {
    return (
        <>
        <div>
            <nav className="flex justify-between">
                <div className="ml-20">
                    BlogPost
                </div>
                <ul className="flex  w-80 justify-between mr-10">
                    <li>
                        <Link to='/about'></Link>
                    </li>
                    <li>
                        items
                    </li>
                    <li>
                        items
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}