import React, { useState, useEffect } from 'react';
import './Digital.css';


const DigitalClock = () => {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

  return (
    <div className='digital-clock'>
        <h1 className='title'>Reloj digital</h1>
        <h2 className='clock'>{clockState}</h2> 
    </div>
  )
}

export default DigitalClock;