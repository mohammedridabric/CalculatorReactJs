import { useState } from 'react';
import './App.css';



function App() {
  const [clac,setClac] = useState("");
  const [result,setResult] = useState("");
  const ops = ['/','*','+','-','.'];
  //
  const updateCalc = value =>{
    if(ops.includes(value) && clac == "" || ops.includes(value) && ops.includes(clac.slice(-1) )){
      return;
    }
    setClac(clac+value);

    if(!ops.includes(value)){
        setResult(eval(clac + value).toString())
    }
  }
  //
   const calculate = ()=>{
     setClac(eval(clac).toString())
   }
   //
   const deleteLast= ()=>{
      if (clac === "") {
        return;
      }
      const value = clac.slice(0,-1);
      setClac(value);
   }
  //
  const createDigits = ()=>{
    const digits= [];
    for (let index = 1; index < 10 ; index++) {
       digits.push(
         <button 
         onClick={ ()=>{updateCalc(index.toString())}} 
         key={index}>{index}</button>
       );
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
        {result ? <span>({result})</span>:'' }
         {clac || "0"}
        </div>
        <div className="operators">
          <button onClick={ ()=>{updateCalc('/')}}>/</button>
          <button onClick={ ()=>{updateCalc('*')}}>*</button>
          <button onClick={ ()=>{updateCalc('+')}}>+</button>
          <button onClick={ ()=>{updateCalc('-')}}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
        {createDigits()}
        <button onClick={ ()=>{updateCalc('0')}}>0</button>
          <button onClick={ ()=>{updateCalc('.')}}>.</button>
          <button onClick={ calculate}>=</button>
        </div>
      </div>
     
     
    </div>
  );
}

export default App;
