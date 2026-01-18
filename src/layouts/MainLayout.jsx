import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 text-neutral-800 font-sans">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow pt-20"> {/* pt-20 to account for fixed navbar */}
                <Outlet />
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default MainLayout;
