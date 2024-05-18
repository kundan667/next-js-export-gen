'use client'
import { FC, useState } from "react";
import constants from "../constants"
import DisplayCard from "./DisplayCard";

interface HeaderItem {
    id: string;
    name: string;
    details: [];
}

const headerData: HeaderItem[] = [...constants.HEADER_DATA];
interface HeaderProps {
}

const Header: FC<HeaderProps> = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [data, setData] = useState<HeaderItem>({
        id: '',
        name: '',
        details: [],
    });
    const handleMenuClick = () => {
        // const modal = document.getElementById('menuModal') as HTMLDialogElement | null;
        // if (modal) {
        //     modal.showModal();
        // } else {
        //     console.error('Modal not found');
        // }
        setShowMenu(true);
    }

    const handleHeaderTabClick = (id: any) => {
        const modal = document.getElementById('tabsModal') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        } else {
            console.error('Modal not found');
        }

        console.log("id:", id);
        let index = headerData.findIndex(i => i.id === id);
        setData(headerData[index]);
    }

    return (
        <header>
            <div className="flex justify-between items-center py-2 px-6">
                <div> <img src="/assets/mi-logo.png" alt="logo" width={150} />  </div>
                <div className="gap-2 sm:gap:4 md:gap-10 hidden sm:flex">
                    {
                        headerData.map((item: any) => (
                            <div key={item.id}
                                className="uppercase text-sm font-semibold flex gap-2 justify-center items-center"
                                onClick={() => handleHeaderTabClick(item.id)}
                            >
                                <span>{item.name}</span>
                                {
                                    item.details.length > 0 && (
                                        <img src="/assets/down_arrow.png" alt="down" width={7} />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="gap-4 hidden md:flex">
                    <button className="uppercase rounded border btn bg-black text-white">LOGIN</button>
                    <button className="uppercase rounded border btn bg-amber-500 text-white">LETS TALK</button>
                </div>

                <div className="sm:hidden">
                    <img src="/assets/burger_menu.png" alt="hamburger" className="cursor-pointer" width={50} onClick={() => handleMenuClick()} />
                </div>
            </div>

            {
                showMenu && (
                    <div className="fixed w-full sm:hidden inset-0 z-[9999] bg-white p-6 px-8 overflow-y-auto">
                        <div className="flex justify-end mb-8">
                            <img src="/assets/close.png" alt="close" className="cursor-pointer" width={20} onClick={() => setShowMenu(false)} />
                        </div>
                        {
                            headerData.map((item: any, i: any) => (
                                <div key={item.id} className={`collapse ${item.details.length > 0 ? 'collapse-arrow' : ''} bg-base-200 my-4`}>
                                    <input type="radio" name="my-accordion-2" defaultChecked={i === 0} />
                                    <div className="collapse-title text-xl font-medium uppercase flex items-center gap-4">
                                        <img src={item.img} alt="icon" width={20} />
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="collapse-content">


                                        {
                                            item.details.map((d: any, index: any) => (
                                                <div key={item.id} className={`my-4 bg-black text-white p-4 rounded`}>
                                                    <div className="bg-amber-500 btn w-full border-none justify-start text-white mb-4">
                                                        {d.productName}
                                                    </div>
                                                    <div>{d.desc}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }

                        <div className="flex gap-4 justify-center px-0 bg-base-200 py-4 rounded-xl">
                            <button className="btn bg-gray-500 text-white font-semibold">LOGIN</button>
                            <button className="btn bg-amber-500 text-white font-semibold">LETSTALK</button>
                        </div>
                    </div>
                )
            }
            {/* products modal */}
            {/* <div className="fixed w-full">
                <div className="flex w-10/12 mx-auto min-h-[100px] gap-6 bg-gray-50 px-[8rem] py-14 rounded-lg">
                    {
                        data?.details?.map((item: any, index: any) => (
                            <div key={item.id} className="flex flex-grow flex-shrink basis-0">
                                <DisplayCard data={item} />
                            </div>
                        ))
                    }
                </div>
            </div> */}
            {/* products modal */}

            {/* <dialog id="menuModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog> */}


            <dialog id="tabsModal" className="modal w-full backdrop:bg-transparent">
                <div className="modal-box w-11/12 max-w-full bg-gray-50 shadow-none">
                    <div className="flex w-12/12 mx-auto min-h-[100px] gap-6 px-[7rem] py-8 rounded-lg">
                        {
                            data?.details?.map((item: any, index: any) => (
                                <div key={item.id} className="flex flex-grow flex-shrink basis-0">
                                    <DisplayCard data={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop ">
                    <button>close</button>
                </form>
            </dialog>
        </header>
    )
}

export default Header