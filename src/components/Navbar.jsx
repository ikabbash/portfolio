import React from 'react'
import Logo400 from '../assets/Logo400.svg'

export default function Navbar() {
    return (
        <>
            <nav className="w-100 px-8 md:px-auto mb-40">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="text-indigo-500 md:order-1">
                    <img className="pl-3 mt-2 scale-100 lg:scale-125 h-12 w-12" src={Logo400} alt="Logo" />
                    </div>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 mt-2">
                        <ul className="flex font-semibold justify-between">
                            <li className="md:px-4 md:py-2 text-indigo-500"><a href="#">Dashboard</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Search</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Explore</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                    </div>
                </div>
            </nav>
        </>
    )
}
