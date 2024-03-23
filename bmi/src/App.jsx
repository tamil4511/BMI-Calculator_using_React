import { useState } from 'react';
import './App.css'
import calculatorImage from './assets/Calculator.gif';

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);



  const calculate=()=>
  {
    if(height==="" || weight==="")
    {
      setBmi("");
      setStatus("");
      setError(true);
      return;
    }
    const isValidHeight = /^\d*$/.test(height);
    const isValidWeight = /^\d*$/.test(weight);
    if( isValidHeight  && isValidWeight)
    {
      setBmi((weight/(height/100)**2).toFixed(1));
      if(bmi<18.5)
      {
        setStatus("Under Weight");
      }
      else if(bmi>=18.5 && bmi<24.9)
      {
        setStatus("Normal Weight");
      }
      else if(bmi>=24.9 && bmi<29.9)
      {
        setStatus("Over Weight");
      }
      else 
      {
        setStatus("Obesity");
      }

    }
    else
    {
      setBmi("");
      setStatus("");
      setError(true);
    }

  }
  const clear=()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus(null);
  }
  return (
   <>
    <div className="bmi-container">
      <div className="image">
        <img src={calculatorImage} alt="" />
      </div>
      <div className="data">
        <h1>BMI CALCULATOR</h1>
        {error && <p className='error'>Please enter valid numeric values</p>}
        <div className="input-container">
          <label htmlFor="height">Height (cm):</label>
          <input type="text" id='height'value={height} onChange={(e)=>{setHeight(e.target.value)}} placeholder='0'/>
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="text" id='weight' value={weight} onChange={(e)=>{setWeight(e.target.value)}} placeholder='0'/>
        </div>
        <button onClick={calculate}>Calculate BMI</button>
        <button onClick={clear}>Clear</button>
        {bmi && <div className="result">
          <p>your BMI is : {bmi}</p>
          <p>Status: {status}</p>
        </div>}
      </div>
    </div>
   </>
  );
};


export default App
