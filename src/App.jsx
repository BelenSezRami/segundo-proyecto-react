import './App.css'
import { useState } from 'react';
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';

function App() {

  const [clicksNumber, setClicksNumber] = useState(0)

  const click = () => {
    setClicksNumber(clicksNumber+1)
  } 

  const resetCounter = () => {
    setClicksNumber(0)
  }

  return (
    <div className='App'>
      <div className='whole-container'>

        <Counter
        clicksNumber={clicksNumber}
        />

        <Button
          text='Click here'
          isClickButton={true}
          click={click}
        />

        <Button
          text='Reset'
          isClickButton={false}
          click={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
