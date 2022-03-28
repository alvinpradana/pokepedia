import React from 'react';
import Button from '../components/Button';
import PageTitle from '../components/PageTitle';

function DetailFavorite() {
    return (
        <div>
            <PageTitle pageTitle="Detail Favorite Pokemon" />
            <div className="flex justify-start mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl bg-white shadow-lg">
                    <img src="http://placekitten.com/g/400/400" alt="Cat" className="w-full md:h-auto rounded-t-xl md:rounded-l-xl md:rounded-tr-none" />
                    <div className="p-6 flex flex-col justify-start mb-5">
                        <div className="mb-5">
                            <h5 className="text-gray-900 text-xl font-medium tracking-tight mb-2">Your Favorite Pokemon</h5>
                            <p className="text-gray-700 text-base mb-4">
                                This is a detail pokemon page.
                            </p>
                            <p className="text-gray-600 text-xs">Last update 3 minutes ago.</p>
                        </div>
                        <Button btnTitle="Delete favorite" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailFavorite;