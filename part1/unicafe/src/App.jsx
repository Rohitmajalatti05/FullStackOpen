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
const Statistics = (props) => {
 return(
  <div>
    <h2>Statistics</h2>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
  </div>
 )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display/>
      <Button handleClick={() => setGood(good + 1)} text ="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text ="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text ="bad"/>
      <Statistics good = {good}  neutral = {neutral} bad = {bad}/>
     
    </div>
  )
}

export default App