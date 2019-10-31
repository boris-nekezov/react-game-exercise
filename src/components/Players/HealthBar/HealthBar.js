import React from 'react';
import classes from './HealthBar.module.css';

const HealthBar = ({ healthPoints }) => {
    const { HealthBar } = classes;

    return (
        <div className={HealthBar}>
            <div
                className={`${HealthBar} text-center`}
                style={{
                    backgroundColor: 'green',
                    margin: '0',
                    color: 'white',
                    width: `${healthPoints}%`
                }}>
                {healthPoints}
            </div>
        </div>
    );
}

export default HealthBar;
