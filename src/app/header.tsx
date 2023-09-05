'use client'
import React from "react"
import { useState } from 'react'
import Image from "next/image"
import {IoMdMenu} from "react-icons/io"
import Offcanva from "../components/Offcanva"
import Link from "next/link"

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  const Header: React.FC = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<Boolean>(false)
      
    return(
        <>
        <header className="fixed inset-x-0 top-0 z-40">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex sm:flex-1">
                <a href="#" className="-m-1.5 p-1.5 w-8 h-6 rounded-md bg-slate-950">
                </a>
            </div>
            <div className="flex sm:hidden">
                <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
                >
                <span className="sr-only">Open header menu</span>
                <IoMdMenu className=" fill-tp3 w-6 h-6 active:rotate-12 ease-in-out duration-75" aria-hidden="true"/>
                </button>
            </div>

            <ul className="hidden sm:flex sm:gap-x-12">
                {navigation.map((item) => (
                <li key={item.name} className="text-sm font-semibold leading-6 text-gray-900">
                    <Link href={item.href}>{item.name}</Link>
                </li>
                ))}
            </ul>

            <div className="hidden sm:flex sm:flex-1 sm:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            </nav>
        </header>
        {mobileMenuOpen && 
        <Offcanva close={()=>setMobileMenuOpen(false)}>
                  {navigation.map((item) => (
                      <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                      {item.name}
                    </a>
                  ))}
        </Offcanva>
        }
    </>
    )
}

export default Header