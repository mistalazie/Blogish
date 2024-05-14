import { Link } from "react-router-dom";
import { TopBar } from "../component/TopBar";
import { BottomBar } from "../component/BottomBar";
import { Content } from "../component/Content";
import { LinkButton } from "../component/LinkButtons";


export function LandingPage() {
    return <div className="bg-myYellow flex flex-col justify-between h-screen">
        <TopBar label={"BlogPost"} />
        <div className="ml-40 w-2/5">
            <div className="text-8xl font-bold pb-12">
                <Content label={"Stay curious."} />
            </div>
            <div className="text-2xl  pb-12">
                <Content label={"Discover stories, thinking, and expertise from writers on any topic."} />
            </div>
            <div className="h-8 bg-black text-white font-semibold rounded-full w-32 text-center flex">
                <LinkButton buttonText={"Start reading"} to={"/signup"} />
            </div>
        </div>
        <BottomBar />
    </div>
}
