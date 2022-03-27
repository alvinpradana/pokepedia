import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Favorite from '../views/Favorite'
import Detail from '../views/Detail';
import DetailFavorite from '../views/DetailFavorite';

function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route exact path='/favorite/detail' element={<DetailFavorite />} />
            <Route path='/detail/:name' element={<Detail />} />
        </Routes>
    );
}

export default Router;