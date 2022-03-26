import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <div className='visible md:invisible'>
                <nav className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow border-t">
                    <div className="flex justify-between">
                        <NavLink to='/' className="w-full justify-center inline-block text-center pt-2 pb-1 hover:bg-gray-900 hover:text-gray-300 transition duration-300 focus:bg-gray-900 focus:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="block text-sm">Dashboard</span>
                        </NavLink>
                        <NavLink to='/favorite' className="w-full justify-center inline-block text-center pt-2 pb-1 hover:bg-gray-900 hover:text-gray-300 transition duration-300 focus:bg-gray-900 focus:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width={25} className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                            </svg>
                            <span className="block text-sm">Favorite</span>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;