import { FC } from "react";
import constants from "../constants";

interface DisplayCardProps {
    text: string
}

const DisplayCard: FC<DisplayCardProps> = (props) => {

    return (
        <div className="bg-zinc-950 text-white p-3 rounded-md">
            <div className="bg-amber-500 rounded-md p-2">
                <div className="uppercase text-lg">Platform</div>
                <p className="text-sm">this is sample text data</p>
            </div>
            <div className="grid display-card-grid">

                <div><i className="fa-solid fa-network-wired"></i></div>
                <p>this is sample text data this is sample text data</p>
            </div>

        </div>
    )
}

export default DisplayCard