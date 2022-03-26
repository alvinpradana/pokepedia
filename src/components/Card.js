import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <div>
            <div className='rounded-xl w-400 h-300 shadow-lg hover:shadow-2xl transition duration-300 bg-white max-w-sm'>
                <NavLink to={props.content.detailUrl}>
                    <img src={props.content.imageUrl} alt="Cat" className="rounded-t-xl" />
                </NavLink>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-semibold tracking-tight mb-2">
                        {props.content.title}
                    </h5>
                    <p className='text-gray-700 text-base tracking-tight mb-4'>
                        {props.content.description}
                    </p>
                    <a href={props.content.linkUrl} className='text-blue-400 font-medium tracking-tight text-sm hover:text-blue-300 transition duration-300'>{props.content.linkTitle}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;