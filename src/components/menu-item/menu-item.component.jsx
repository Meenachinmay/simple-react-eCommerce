import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, id}) => (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">
                { title }
            </h1>
            <span className="sub-title">
                SHOP NOW        
            </span>
        </div>
    </div>
);

export default MenuItem;