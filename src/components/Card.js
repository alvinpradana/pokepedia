import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <div>
            <div className='rounded-xl w-400 h-300 shadow-lg hover:shadow-2xl transition duration-300 bg-white max-w-sm'>
                <NavLink to="/detail">
                    <img src={props.content.imageUrl} alt="Cat" className="rounded-t-xl" />
                </NavLink>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-semibold tracking-tighter mb-2">
                        {props.content.title}
                    </h5>
                    <p className='text-gray-700 text-base tracking-tighter mb-4'>
                        {props.content.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;