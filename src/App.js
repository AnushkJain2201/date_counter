
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

export default App;


const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  

  const handlePrevCount = () => {
    setCount(count - step);
    
  }

  const handleNxtCount = () => {
    setCount(count + step);
  }

  return (
    <div>
      <div className='ter'>
        <button className='btn' onClick={() => step > 1 && setStep((currStep) => currStep - 1)}>-</button>
        <h3>Step: {step}</h3>
        <button className='btn' onClick={() => setStep(step + 1)}>+</button>
      </div>

      <div className='ter'>
        <button className='btn' onClick={handlePrevCount}>-</button>
        <h3>Count: {count}</h3>
        <button className='btn' onClick={handleNxtCount}>+</button>
      </div>

      <div className='ter'>
        {/* My Way */}
        {/* <h3>{count > 0 ? `${count} Days From Today Is ${date.toDateString()}` : `${count} Days Ago Was ${date.toDateString()}`}</h3> */}

        {/* Better Way */}
        <h3>
          <span>{count === 0 ? "Today Is " : count > 0 ? `${count} Days From Today Is ` : `${Math.abs(count)} Days Ago Was `}</span>
          <span>{date.toDateString()}</span>
        </h3>
      </div>
    </div>
  );
}