import React from 'react';
import classes from './Controls.module.css';
import STATS from '../../utils/STATS';
import Btn from '../UI/Btn/Btn';

const { statsDamage, statsBigDamage } = STATS;

const Controls = ({ start, attacked, healed, gaveUp, gameStarted }) => {
    const { Controls } = classes;

    return (
        <section className={`row ${Controls}`}>
            {gameStarted ? 
                <div className="small-12 columns">
                    <Btn btnType="Attack" onClick={() => attacked(...statsDamage)}>ATTACK</Btn>
                    <Btn btnType="SpecialAttack" onClick={() => attacked(...statsBigDamage)}>SPECIAL ATTACK</Btn>
                    <Btn btnType="Heal" onClick={healed}>HEAL</Btn>
                    <Btn btnType="GiveUp" onClick={gaveUp}>GIVE UP</Btn>
                </div>
            :
                <Btn btnType="StartGame" onClick={start}>START NEW GAME</Btn>
            }
        </section>
    
    );
}

export default Controls;