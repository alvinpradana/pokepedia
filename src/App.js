import React from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Router from './router';

function App() {
    return (
        <div>
            <div className="xs:px-6 md:container">
                <Hero />
                <Router />
                <Navigation />
            </div>
        </div>
    );
}

export default App;