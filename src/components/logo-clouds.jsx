'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const logoImgs = [
    {
       src:"/hurley-256.png",
       alt:"hurley",
    },
    {
       src:"/logo-adidas-256.png",
       alt:"adidas",
    },
    {
       src:"/logo-jordan-256.png",
       alt:"jordan",
    },
    {
       src:"/logo-nike-256.png",
       alt:"nike",
    },
    {
       src:"/logo-puma-icon-256.png",
       alt:"puma",
    },
]

export default function LogoCloud(){

    const [scrollValue, setScrollValue] = useState(0)
    const [typeTela, setTypeTela] = useState(0)

    const next = () => {
        setScrollValue((scrollValue) => (scrollValue == logoImgs.length -1 ? 0 : scrollValue+1))
    }

    const prev = () => {
        setScrollValue((scrollValue) => (scrollValue == 0 ? logoImgs.length-1 : scrollValue-1))
    }

    function scrollView(tela){
        if(tela <=1080 && tela > 640){
            return 304*scrollValue
        }else{
            return 240*scrollValue
        }
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth >= 1080){
            setTypeTela(0)
        }else{
            if(window.innerWidth <= 1080 && window.innerWidth > 390){
                setTypeTela(80)
            }else{
                setTypeTela(64)
            }
        }
    })

    return(
        <div className="bg-white py-4 sm:py-12 w-full">
        <div className="mx-auto max-w-full">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Empresas que aprovam nossos serviços.
            </h2>
            <div className="relative overflow-x-hidden flex justify-center items-center">
                <div className="absolute z-30 flex flex-row items-center inset-x-0 inset-y-0 justify-between">
                    <button onClick={prev}>
                        <IoIosArrowBack className="fHD:hidden w-20 h-20 max-sm:w-16 max-sm:h-16 max-mob:w-12 max-mob:h-12"/>
                    </button>
                    <button onClick={next}>
                        <IoIosArrowForward className="fHD:hidden w-20 h-20 max-sm:w-16 max-sm:h-16 max-mob:w-12 max-mob:h-12"/>
                    </button>
                </div>
                <div className="w-[100%] flex flex-row fHD:w-full fHD:justify-evenly fHD:gap-0 fHD:pl-0 
                                pl-[50%] justify-start max-sm:gap-x-20 gap-x-36 mt-4 will-change-transform
                            transition-transform ease-in-out duration-500"
                            style={{transform: `translateX(-${scrollView(window.innerWidth) + typeTela}px)`}}>

                            {logoImgs.map((logo, index)=>{
                                return(
                                    <Image data-inView={index == scrollValue ? false : true} className="w-40 h-40 max-mob:w-32 max-mob:h-32
                                                                                                transition-opacity ease-in-out duration-500 max-fHD:data-[inView=true]:opacity-25"
                                    src={logo.src} alt={logo.alt} 
                                    width={200} height={200}/>
                                )
                            })}
                </div>
            </div>
        </div>
        </div>

    )
}
  