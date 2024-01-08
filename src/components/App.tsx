import React from 'react';
import cl from './App.module.scss'
import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <div className={cl.test}>
            123
            <Outlet/>
        </div>
    )
}