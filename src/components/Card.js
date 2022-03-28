import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
    return (
        <div>
            <NavLink to={props.content.detailUrl}>
                <div className="rounded-xl w-400 h-300 shadow-lg hover:shadow-2xl transition duration-300 bg-blue-300 max-w-sm">
                    <img src={props.content.imageUrl} alt="Cat" className="rounded-t-xl flex items-center justify-center w-auto mx-auto py-6" />
                    <div className="p-4 bg-gray-900 rounded-b-xl">
                        <h5 className="text-gray-100 text-lg text-center font-semibold tracking-tight uppercase">
                            {props.content.title}
                        </h5>
                    </div>
                </div>
            </NavLink>
        </div>
    );
}

export default Card;
