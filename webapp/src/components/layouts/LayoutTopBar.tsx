import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../../components/top-bar/TopBar';

const LayoutTopBar:React.FC = () => {
    return(
        <>
            <TopBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LayoutTopBar;