import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({btnText}) => (
    <button className="custom-button">
        {btnText}
    </button>
)

export default CustomButton;