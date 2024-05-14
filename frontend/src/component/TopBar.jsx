import { Button } from "./Button";
import { Link } from "react-router-dom";
import logo from "../assets/New Doc 04-21-2024 04.08-cutout.png"
import { LinkButton } from "./LinkButtons";

export function TopBar({ label }) {
    return <div className="flex justify-around bg-myYellow h-20 border-b-1 border-black shadow-inner">
        <div className="flex">
            <img src={logo} className="flex flex-col justify-center object-scale-down w-14 h-14 mt-3"></img>
            <div className="flex flex-col justify-center text-center text-4xl font-black m-2 font-Yeseva font-bold">
                {label}
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex font-semibold">
                <LinkButton to={"/signin"} buttonText={"Sign in"} />
            </div>
            <div className="flex mt-5 h-10 bg-black text-white rounded-full font-semibold">
                <LinkButton to={"/signup"} buttonText={"Get Started"} />
            </div>
        </div>
    </div>
}