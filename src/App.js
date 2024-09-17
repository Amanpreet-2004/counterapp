import './App.css';
import {useState } from 'react' 
function App() {
  const [count, setCount] =useState(1);
  const increment = () =>{
    setCount(count + 1);
  }
  const decrement =() =>{
    setCount(count - 1);
  }
  return (
   <div>
    <h1>CounterApp: {count}</h1>
    <button onClick={increment}>btn1</button>
    <button onClick={decrement}>btn2</button>
   </div>
  );
}

export default App;
