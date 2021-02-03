import React, { useState, useEffect, useRef } from 'react';

const StopWatchApp = () => {
    const startTimeRef = useRef(0);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        if(isRunning) {
            const interval = setInterval(update, 10);
            return () => { clearInterval(interval) }
        }
    });

    const update = () => {
        const delta = Date.now() - startTimeRef.current; //startTimeRef.current gets access to what time it was when we pressed "start" & we're taking the current date, and subtracting where it was when we started
        setTime(time + delta); //taking current value for time and add the delta 
        startTimeRef.current = Date.now();
    }

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now()
    }

    const stop = () => {
        setIsRunning(false);
    }

    const lap = () => {
        setLaps([...laps, time]); //... is s spread operator...takes the current value of laps and spread them out into this new array literal that we're passing into setLaps
    }

    const reset = () => { //sets our time back to 0 and clears out all the lap time we've been storing
        setTime(0);
        setLaps([]);
    }

    return (
        <div>
            <h1 className = "section-title">React Stopwatch!</h1>
            <p>
                { Math.floor((time / 1000) / 60).toString() } : 
                { Math.floor((time / 1000) % 60).toString() }
            </p> 
            { isRunning ? <button onClick={ stop }>Stop</button> : <button onClick={ start }>Start</button> //if running, we'll show a button to stop the time and if not running, we'll show a button to start the time
            }
            { isRunning ? <button onClick={ lap }>Lap</button> : <button onClick={ reset }>Reset</button> //if running, we'll expose a button handler to handle lapping times and if not running, we'll give the user the option to reset the time
            }
            { laps.map(time => {
                return (
                    <p>
                        { Math.floor((time / 1000) / 60).toString()} :
                        { Math.floor((time / 1000) % 60).toString()}
                    </p>
                )
            })
            }
        </div>
    );
}

export default StopWatchApp;