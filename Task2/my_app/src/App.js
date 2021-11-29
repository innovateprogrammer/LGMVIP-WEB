import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result,setResult]=useState("");
  const handleClick=(e)=>{
    setResult(result.concat(e.target.name));


  }
  const clear =() =>{
    setResult("");
  }
  const backspace=()=>
  {
    setResult(result.slice(0,result.length-1));
  }
  const calculate=()=>
  {
    try{
      setResult(eval(result).toString());
    }catch(err)
    {
      setResult("Error");
    }
    
  }
  
  return (
    <div className="App">
      <div class="def">Calculator by Aditya Gadre</div>
      <div className="container">
        <form>
          <input id="myInput" type="text" value={result}></input>

        </form>
        <div className="keypad">
          <button class="btn" onClick={clear} id="clear">Clear</button>
          <button class="btn" onClick={backspace} id="backspace">C</button>
          <button class="btn" name="/" onClick={handleClick}>&divide;</button>
          <button class="btn" name="7" onClick={handleClick}>7</button>
          <button class="btn" name="8" onClick={handleClick}>8</button>
          <button class="btn" name="9" onClick={handleClick}>9</button>
          <button class="btn" name="*" onClick={handleClick}>&times;</button>
          <button class="btn" name="6" onClick={handleClick}>6</button>
          <button class="btn" name="5" onClick={handleClick}>5</button>
          <button class="btn" name="4" onClick={handleClick}>4</button>
          <button class="btn" name="-" onClick={handleClick}>&ndash;</button>
          <button class="btn" name="3" onClick={handleClick}>3</button>
          <button class="btn" name="2" onClick={handleClick}>2</button>
          <button class="btn" name="1" onClick={handleClick}>1</button>
          <button class="btn" name="+" onClick={handleClick}>+</button>
          <button class="btn" name="0" onClick={handleClick}>0</button>
          <button class="btn" name="." onClick={handleClick}>.</button>
          <button class="btn" name="=" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
