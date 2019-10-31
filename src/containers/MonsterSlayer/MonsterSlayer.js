import React, { useState } from 'react';
import Players from '../../components/Players/Players';
import Controls from '../../components/Controls/Controls';
import Log from '../../components/Log/Log';
// utils
import STATS from '../../utils/STATS';
import calculateDamage from '../../utils/calculateDamage';
import generateTurn from '../../utils/generateTurn';

const {
    statsGameIsRunning,
    statsPlayerHealthPoints,
    statsMonsterHealthPoints,
    statsTurns,
    statsHealSize,
    statsBigDamage
} = STATS;

const MonsterSlayer = () => {

    const [gameIsRunning, setGameIsRunning] = useState(statsGameIsRunning); 
    const [playerHealthPoints, setPlayerHealthPoints] = useState(statsPlayerHealthPoints);
    const [monsterHealthPoints, setMonsterHealthPoints] = useState(statsMonsterHealthPoints);
    const [turns, setTurns] = useState(statsTurns);

    const startGameHandler = () => {
        setGameIsRunning(!statsGameIsRunning);
        setPlayerHealthPoints(statsPlayerHealthPoints);
        setMonsterHealthPoints(statsMonsterHealthPoints);
        setTurns(statsTurns);
    }

    const attackHandler = (min, max) => {
        const playerDamage = calculateDamage(min, max);
        const monsterDamage = calculateDamage(...statsBigDamage);
        
        const playerNewTurn = generateTurn(true, 'playerHits', playerDamage);
        const monsterNewTurn = generateTurn(false, 'monsterHits', monsterDamage);

        // const updatedTurns = ;
        const updatedPlayerHP = playerHealthPoints - monsterDamage;
        const updatedMonsterHP = monsterHealthPoints - playerDamage;

        // if checkwin is true then we return so we don't get to next line where monster attacks
        if(checkWin(updatedPlayerHP, updatedMonsterHP)) {
            return;
        }

        setPlayerHealthPoints(updatedPlayerHP);
        setMonsterHealthPoints(updatedMonsterHP);
        setTurns([playerNewTurn, monsterNewTurn, ...turns]);

    }

    const heal = () => {
        if (playerHealthPoints <= 90) {
            const monsterDamage = calculateDamage(...statsBigDamage);

            const playerNewTurn = generateTurn(true, 'playerHeals', statsHealSize);
            const monsterNewTurn = generateTurn(false, 'monsterHits', monsterDamage);

            setPlayerHealthPoints((playerHealthPoints + statsHealSize) - monsterDamage);
            setTurns([playerNewTurn, monsterNewTurn, ...turns]);
        }
    }

    const giveUp = () => {
        setGameIsRunning(false);
    }

    const checkWin = (playerHP, monsterHP) => {
            // if player wins
            if (monsterHP <= 0) {
                if ( window.confirm('You won! New Game?') ) {
                    startGameHandler();
                } else {
                    setGameIsRunning(false);
                }
                return true; // there is win 
            // id monster wins
            } else if (playerHP <= 0) {
                if ( window.confirm('You Lost! New Game?')) {
                    startGameHandler();
                } else {
                    setGameIsRunning(false);
                }
                return true; // there is win
            }
            return false; // no win
    } 

    return (
        <div>
            <Players 
                playerHP={playerHealthPoints}
                monsterHP={monsterHealthPoints} />
            <Controls 
                gameStarted={gameIsRunning} 
                start={startGameHandler}
                attacked={attackHandler}
                specialAttacked={attackHandler} 
                healed={heal}
                gaveUp={giveUp} /> 
            {/* if there are turns display log */}
            {turns.length > 0 ? <Log turnsLog={turns}/> : null}

        </div>
    );
}

export default MonsterSlayer;