import React from "react"
import { IoIosClose } from 'react-icons/io'

export default function OffCanva(props){
    return(
        <section className=" z-50 absolute top-0 bottom-0 w-screen h-full bg-opacity-40 bg-gray-800 backdrop-blur-[2px]">
            <div className="flex flex-col gap-4 items-end animate-move-canva ease-in-out
             absolute bottom-0 top-0 left-auto right-0 w-[400px] bg-white">
                <button onClick={props.close} className=" m-4 w-12 h-12"><IoIosClose className=" fill-tpDark w-full h-full"/></button>
                <ul className=" w-full h-full flex flex-col p-8 justify-between">
                    {props.children}
                </ul>
            </div>
        </section>
    )
}