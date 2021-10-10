import React from "react";
import { useState } from "react";
import product from './product.jpg';
function ProductCard() {
    const [activeProductCard, setActiveProductCard] = useState('');
    return (
        <div className="ProductCard-container">
            <div className="product-card-wrapper">
                <div className="product-card-container">
                    <div className="product-img-container">
                        <img src={product} />
                    </div>
                    <h3 className="product-name">Product Name</h3>
                    <p className="product-prce">Product Price</p>
                </div>

            </div>
        </div>
    );
}
export default ProductCard;