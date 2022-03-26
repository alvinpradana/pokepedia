import React from 'react';
import Button from '../components/Button';
import PageTitle from '../components/PageTitle';

function Detail() {
    return (
        <div>
            <PageTitle pageTitle="Detail Pokemon" />
            <div className="flex justify-start mt-5">
                <div className="flex flex-col md:flex-row rounded-xl bg-white shadow-lg mr-5">
                    <img src="http://placekitten.com/g/400/400" alt="Cat" className="w-full md:h-auto rounded-t-xl md:rounded-l-xl md:rounded-tr-none" />
                    <div className="p-6 flex flex-col justify-start">
                        <div className="mb-5">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Detail Pokemon</h5>
                            <p className="text-gray-700 text-base mb-4">
                                This is a detail pokemon page.
                            </p>
                            <p className="text-gray-600 text-xs">Last update 3 minutes ago.</p>
                        </div>
                        <Button btnTitle="Add to favorite" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;