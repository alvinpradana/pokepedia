import React from 'react';
import Card from './components/Card';
import Navigation from './components/Navigation';

function App(props) {
    return (
        <div>
            <div className="flex items-center justify-center md:min-h-screen">
                <div className="container">
                    <Card />
                    <Navigation />
                </div>
            </div>
        </div>
    );
}

export default App;