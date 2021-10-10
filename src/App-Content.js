import React from "react";
import { useState } from "react";
import ProductCard from './Product-Card';
function AppContent() {
    const [activeAppContent, setActiveAppContent] = useState('');
    return (
        <div className=" app-content-wrapper">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}
export default AppContent;