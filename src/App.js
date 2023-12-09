
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
  return (
    <div>
      <div className='ter'>
        <button className='btn'>-</button>
        <h3>Step: 0</h3>
        <button className='btn'>+</button>
      </div>

      <div className='ter'>
        <button className='btn'>-</button>
        <h3>Count: 0</h3>
        <button className='btn'>+</button>
      </div>

      <div className='ter'>
        <h3>Sat Dec 09 2023</h3>
      </div>
    </div>
  );
}