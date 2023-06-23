import { useEffect, useState } from 'react';
import './App.css'


const API_URL = 'https://api.adviceslip.com/advice';

const App = () => {

        const [advice, setadvice] = useState('');

        const fetchAdvice = async () => {
                const response = await fetch(API_URL)
                const data = await response.json();
                console.log("problem")
                console.log(data)
                setadvice(data.slip.advice)
        }


        useEffect(() => {
                fetchAdvice()
        }, [])


        return (
                <div className="app">
                        <div className='card'>
                                <h2 className='heading'>{advice}</h2>
                                <button className='glow-on-hover' onClick={() => fetchAdvice() }>
                                        <span>Give me advice</span>
                                        
                                </button>
                        </div>
                </div>
        )



         

}

export default App