import React from 'react';
import classes from './Log.module.css';

const Log = ({ turnsLog }) => {
    const { Log, PlayerTurn, MonsterTurn } = classes;

    return (
        <section className={`row ${Log}`}>
            <div className="small-12 columns">
                <ul>
                    {turnsLog.map((turn, index) => (
                        <li key={index} className={turn.isPlayer ? PlayerTurn : MonsterTurn}>
                            {turn.text}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Log;