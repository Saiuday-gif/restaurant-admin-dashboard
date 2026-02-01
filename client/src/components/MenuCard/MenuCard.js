import React from 'react';
import './MenuCard.css';

const MenuCard = ({ title, description, price, image }) => {
    return (
        <div className="menu-card">
            {image && <img src={image} alt={title} className="menu-card-image" />}
            <div className="menu-card-content">
                <h3 className="menu-card-title">{title}</h3>
                {description && <p className="menu-card-description">{description}</p>}
                {price && <p className="menu-card-price">${price}</p>}
            </div>
        </div>
    );
};

export default MenuCard;