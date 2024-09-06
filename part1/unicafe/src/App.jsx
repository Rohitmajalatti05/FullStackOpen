import { useState } from 'react'
const Display = () =>{
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}
const Button = (props) =>{
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}
// I have already created the Statistics component from the beginning.
const Statistics = (props) => {
 return(
  <div>
    <h2>Statistics</h2>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.all}</p>
    <p>average {props.average}</p>
    <p>positive {props.percentage} %</p>
  </div>
 )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const percentage = (good * 100) / all;

  return (
    <div>
      <Display/>
      <Button handleClick={() => setGood(good + 1)} text ="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text ="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text ="bad"/>
      <Statistics good = {good}  neutral = {neutral} bad = {bad} all= {all} average={average} percentage = {percentage}/>
     
    </div>
  )
}

export default App