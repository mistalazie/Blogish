import { SearchBar } from "./SearchBar";
import logo from "../assets/New Doc 04-21-2024 04.08-cutout.png"
import { LinkButton } from "./LinkButtons";

export function Appbar() {
    return <div className="h-14 flex justify-between border-b-1">
        <div className="flex ml-4 mt-2">
            <img src={logo} className="h-10 w-10"></img>
            <div className="mt-2 ml-4">
                <SearchBar />
            </div>
        </div>
        <div className="flex justify-center">
            <div>
                <div>
                    <LinkButton buttonText={"Write"} to={"/create"}/>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                
            </div>
            <div className="flex flex-col justify-center">
                <div className=" w-10 h-10 bg-gray-200 rounded-full">

                </div>
            </div>
        </div>
    </div>
}