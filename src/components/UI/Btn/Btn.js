import React from 'react';
import classes from './Button.module.css';

const Btn = ({btnType, children, ...config}) => {
    const { Button } = classes;
    return (
        <button className={`${Button} ${classes[btnType]}`} {...config}>{children}</button>
    );
}

export default Btn;