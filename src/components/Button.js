import React from "react";

function Button(props) {
    return (
        <div>
            <button type={props.btnType} className="py-3 px-7 rounded-2xl tracking-tighter font-medium bg-gray-900 text-gray-100 hover:bg-gray-800 transition duration-300 focus:outline-none focus:text-gray-100 focus:ring-4 focus:ring-gray-300 focus:ring-offset-2" >
                {props.btnTitle}
            </button>
        </div>
    );
}

export default Button;
