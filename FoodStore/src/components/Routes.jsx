import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';
import { Category } from '../pages/Category';
import { Recipe } from '../pages/Recipe';
import { Login } from './Login';
import { LoginPage } from '../pages/LoginPage';

const MyRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Category/:name" element={<Category />} />
            <Route path="/Meal/:idMeal" element={<Recipe />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export { MyRoutes };
