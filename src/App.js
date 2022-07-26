
import './App.css';
import {useState} from 'react';

function App() {
  const [temp,setTemp] = useState(0);
  const [color,setColor] = useState("DodgerBlue");

const Increment =() =>{
  const newTemp = temp +1;
  if(newTemp > 20){
    setColor("orange")
  }
   setTemp(temp+1);
}

const Decrement = ()=>{
  const newTemp = temp -1;
  if(newTemp < 20){
     setColor("DodgerBlue")
  }
  return setTemp(temp-1);
      
}

  return (
    <div className="container">
      <div className='App'>
     <h1>Hello</h1>
     <div className='circle' style={{background: color}}><h1>{temp} 'C</h1></div>
     <button className='increment' onClick={Increment}>+</button>
     <button className='decrement' onClick={Decrement}>-</button>

      </div>
    </div>
  );
}

export default App;
