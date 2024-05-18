import { FC } from "react";

interface DisplayCardProps {
    data: any
}

const DisplayCard: FC<DisplayCardProps> = (props) => {

    return (
        <div className="bg-zinc-950 text-white p-8 rounded-lg">
            <div className="bg-amber-500 rounded-lg p-6 mb-12">
                <div className="uppercase text-lg font-bold">{props.data.productName}</div>
                <p className="text-sm">{props.data.header}</p>
            </div>
            <div className="grid grid-cols-display-card gap-4">
                <img src={props.data.img} alt="images" />
                <p className="pl-4 text-[0.85em]">{props.data.desc}</p>
            </div>
        </div>
    )
}

export default DisplayCard