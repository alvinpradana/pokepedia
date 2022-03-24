import React from 'react';

function Card(props) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
                <div className='rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white max-w-sm'>
                    <a href="#!">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" className="rounded-t-lg" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                            Card title
                        </h5>
                            <p className='text-gray-700 text-base mb-4'>
                                Some description.
                            </p>
                    </div>
                </div>
                <div className='rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white max-w-sm'>
                    <a href="#!">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" className="rounded-t-lg" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                            Card title
                        </h5>
                            <p className='text-gray-700 text-base mb-4'>
                                Some description.
                            </p>
                    </div>
                </div>
                <div className='rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white max-w-sm'>
                    <a href="#!">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" className="rounded-t-lg" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                            Card title
                        </h5>
                            <p className='text-gray-700 text-base mb-4'>
                                Some description.
                            </p>
                    </div>
                </div>
                <div className='rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white max-w-sm'>
                    <a href="#!">
                        <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" className="rounded-t-lg" />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">
                            Card title
                        </h5>
                            <p className='text-gray-700 text-base mb-4'>
                                Some description.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;