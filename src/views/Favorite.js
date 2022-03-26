import React from 'react';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

function Favorite() {
    return (
        <div>
            <PageTitle pageTitle="Your Favorite Pokemon" />
            <div className="flex items-start mb-32">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-5">
                    <div className="flex flex-col">
                        <Card content={{
                            imageUrl:"http://placekitten.com/g/400/300",
                            title:"First card",
                            description:"First card description.",
                            detailUrl:"/favorite/detail",
                            linkUrl:"#!",
                            linkTitle:"Delete"
                            }} />
                    </div>
                    <Card content={{
                        imageUrl:"http://placekitten.com/400/300",
                        title:"Second card",
                        description:"Second card description.",
                        detailUrl:"/favorite/detail",
                        linkUrl:"#!",
                        linkTitle:"Delete"
                        }} />
                    <Card content={{
                        imageUrl:"http://placekitten.com/g/400/300",
                        title:"Third card",
                        description:"Third card description.",
                        detailUrl:"/favorite/detail",
                        linkUrl:"#!",
                        linkTitle:"Delete"
                        }} />
                    <Card content={{
                        imageUrl:"http://placekitten.com/400/300",
                        title:"Forth card",
                        description:"Forth card description.",
                        detailUrl:"/favorite/detail",
                        linkUrl:"#!",
                        linkTitle:"Delete"
                        }} />
                </div>
            </div>
        </div>
    );
}

export default Favorite;