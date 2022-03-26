import React from 'react';

function PageTitle(props) {
    return (
        <div>
            <h5 className="text-gray-900 font-semibold text-xl tracking-tight mt-10">
                {props.pageTitle}
            </h5>
        </div>
    );
}

export default PageTitle;