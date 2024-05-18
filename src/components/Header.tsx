import { FC } from "react";
import constants from "../constants"

const headerData = constants.HEADER_DATA
interface HeaderProps {
}

const Header: FC<HeaderProps> = (props) => {

    return (
        <header>
            <div className="hidden sm:flex justify-between items-center py-2 px-6">
                <div>
                    <img src="/assets/mi-logo.png" alt="logo" width={150} />
                </div>
                <div className="flex gap-4">
                    {
                        headerData.map(item => (
                            <div key={item.id} className="uppercase text-sm font-semibold">{item.name}</div>
                        ))
                    }
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2 bg-black rounded text-sm font-bold text-white">LOGIN</button>
                    <button className="px-6 py-2 bg-amber-500 rounded text-sm font-bold text-white">LETS TALK</button>
                </div>
            </div>
        </header>
    )
}

export default Header