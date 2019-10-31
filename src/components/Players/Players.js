import React from 'react';
import HealthBar from './HealthBar/HealthBar';

const Players = ({ playerHP, monsterHP }) => (    
        <section className="row">
            <div className="small-6 columns">
                <h1 className="text-center">YOU</h1>
                <HealthBar healthPoints={playerHP} />   
            </div>
            <div className="small-6 columns">
                <h1 className="text-center">MONSTER</h1>
                <HealthBar healthPoints={monsterHP} />
            </div>
        </section>
);

export default Players;