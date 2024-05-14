import { Link } from "react-router-dom";

export function LinkButton ({buttonText, to}) {
    return <div className="flex justify-center m-4 flex-col font-md">
        <Link to={to}>{buttonText}
        </Link>
    </div>

}