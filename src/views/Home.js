import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

function Home() {
    return (
        <div>
            <PageTitle pageTitle="List Pokemon"></PageTitle>
            <div className="flex items-start">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-5">
                    <Card content={{
                        imageUrl:"http://placekitten.com/g/400/300",
                        title:"First card",
                        description:"First card description.",
                        detailUrl:"/detail",
                        linkUrl:"#!",
                        linkTitle:"Add to favorite"
                        }} />
                    <Card content={{
                        imageUrl:"http://placekitten.com/400/300",
                        title:"Second card",
                        description:"Second card description.",
                        detailUrl:"/detail",
                        linkUrl:"#!",
                        linkTitle:"Add to favorite"
                        }} />
                    <Card content={{
                        imageUrl:"http://placekitten.com/g/400/300",
                        title:"Third card",
                        description:"Third card description.",
                        detailUrl:"/detail",
                        linkUrl:"#!",
                        linkTitle:"Add to favorite"
                        }} />
                    <Card content={{
                        imageUrl:"http://placekitten.com/400/300",
                        title:"Forth card",
                        description:"Forth card description.",
                        detailUrl:"/detail",
                        linkUrl:"#!",
                        linkTitle:"Add to favorite"
                        }} />
                </div>
            </div>
            <div className="flex flex-row justify-center mt-8 mb-32">
                <Button btnTitle="Show more" />
            </div>
        </div>
    );
}

export default Home;