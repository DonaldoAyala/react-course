//import User from "./User";
import Title from "./Title";
import {useState} from "react";

const App = () => {
    // const array = ["Donny", "Oscar", "Luis"];
    // const fn = (e) => console.log('Event', e);
    const [counter, setCounter] = useState(0);
    const [increment, setIncrement] = useState(0);

    const add = () => {
        setCounter(counter + increment)
    }

    const subtract = () => {
        setCounter(counter - increment)
    }

    const resetCounter = () => {
        setCounter(0);
    }

    const increaseIncrement = () => {
        setIncrement(increment + 1)
    }

    const decreaseIncrement = () => {
        setIncrement(increment - 1)
    }

    const resetIncrement = () => {
        setIncrement(0);
    }

    return (
        <>
            <div className="container">
                <Title background='dark-background' content='React Counter Fight!' />
                <Title content='Score'/>
                <div className='counter-section'>
                    <div className='counter'>{counter}</div>
                    <div className='fighters'>
                        <button onClick={subtract}> (ง •_•)ง Subtract</button>
                        <button onClick={resetCounter}>Restart</button>
                        <button onClick={add}> ผ(•̀_•́ผ) Add</button>
                    </div>
                </div>
                <div className='increment-section'>
                    <div className='increment'>{increment}</div>
                    <div className="increment-controls">
                        
                        <button onClick={decreaseIncrement}>🔽</button>
                        <button onClick={resetIncrement}>Reset</button>
                        <button onClick={increaseIncrement}>🔼</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;