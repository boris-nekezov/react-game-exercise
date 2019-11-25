import React from 'react';
import classes from './Controls.module.css';
import STATS from '../../utils/STATS';

const { statsDamage, statsBigDamage } = STATS;

const Controls = ({ start, attacked, healed, gaveUp, gameStarted }) => {
    const { Button, StartGame, Attack, SpecialAttack, Heal, GiveUp, Controls } = classes;

  

    return (
        <section className={`row ${Controls}`}>
            {gameStarted ? 
                <div className="small-12 columns">
                    {/* attack */}
                    <button 
                        className={`${Button} ${Attack}`}
                        onClick={() => attacked(...statsDamage)}>ATTACK</button> 
                    {/* special attack */}
                    <button 
                        className={`${Button} ${SpecialAttack}`}
                        onClick={() => attacked(...statsBigDamage)}>SPECIAL ATTACK</button>
                    {/* heal */}
                    <button 
                        className={`${Button} ${Heal}`}
                        onClick={healed}>HEAL</button> 
                    {/* give up */}
                    <button 
                        className={`${Button} ${GiveUp}`}
                        onClick={gaveUp}>GIVE UP</button>
                </div>
            :
                <button 
                    className={`${Button} ${StartGame}`}
                    onClick={start}>START NEW GAME</button>
            }
        </section>
    
    );
}

export default Controls;