import './App.css';
import { useState } from 'react';

function App() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState('');
    const [value9, setValue9] = useState('');
    const [currentValue, setCurrentValue] = useState('X');
    const mapArr = [
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
    ];
    const titlePlaying = `Next move is ${currentValue}`;
    const [title, setTitle] = useState(titlePlaying);
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    }
    const clickHandler = (setValue, position) => {
        let currentBefore = currentValue;
        let check = calculateWinner(mapArr);

        if (!check) {
            if (currentValue === 'X') {
                setValue('X');
                setCurrentValue('O');
            } else {
                setValue('O');
                setCurrentValue('X');
            }
        } else {
            return;
        }
        mapArr[position - 1] = currentBefore;
        check = calculateWinner(mapArr);
        if (check) {
            setTitle(`${check} win!!`);
        } else {
            if (currentValue === 'X') {
                setTitle(`Next move is O`);
            } else {
                setTitle(`Next move is X`);
            }
        }
    };

    return (
        <div className='App'>
            <h4>{title}</h4>
            <div className='board-row'>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value1}
                        onClick={() => clickHandler(setValue1, 1)}
                    >
                        {value1}
                    </button>
                </div>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value2}
                        onClick={() => clickHandler(setValue2, 2)}
                    >
                        {value2}
                    </button>
                </div>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value3}
                        onClick={() => clickHandler(setValue3, 3)}
                    >
                        {value3}
                    </button>
                </div>
            </div>
            <div className='board-row'>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value4}
                        onClick={() => clickHandler(setValue4, 4)}
                    >
                        {value4}
                    </button>
                </div>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value5}
                        onClick={() => clickHandler(setValue5, 5)}
                    >
                        {value5}
                    </button>
                </div>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value6}
                        onClick={() => clickHandler(setValue6, 6)}
                    >
                        {value6}
                    </button>
                </div>
            </div>
            <div className='board-row'>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value7}
                        onClick={() => clickHandler(setValue7, 7)}
                    >
                        {value7}
                    </button>
                </div>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value8}
                        onClick={() => clickHandler(setValue8, 8)}
                    >
                        {value8}
                    </button>
                </div>
                <div className='square'>
                    <button
                        className='button-text'
                        disabled={value9}
                        onClick={() => clickHandler(setValue9, 9)}
                    >
                        {value9}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
