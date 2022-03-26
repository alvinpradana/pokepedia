import React from 'react';
import { NavLink } from 'react-router-dom';

function Hero() {
    return (
        <div>
            <nav className="relative w-full flex flex-wrap items-center p-5 rounded-b-xl bg-gray-900 text-white shadow-lg">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={25} className="text-white text-left" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <NavLink to='/' className='text-white px-2 text-sm font-bold tracking-tighter'>Pokepedia</NavLink>
                        <div className='hidden md:block'>
                            <div className="flex flex-space-4 ml-3">
                                <NavLink to="/" className="text-gray-300 px-2 text-sm font-normal tracking-tighter hover:text-white transition duration-300 focus:text-white">Dashboard</NavLink>
                                <NavLink to="/favorite" className="text-gray-300 px-2 text-sm font-normal tracking-tighter hover:text-white transition duration-300 focus:text-white">Favorite</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Hero;