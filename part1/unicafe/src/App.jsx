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

// implemented StatisticLine component
const StatisticLine = (props) => {
  return(
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )


}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const percentage = (props.good * 100) / all;

  if (!(props.good || props.neutral || props.bad)) {
    return <p>No feedback given</p>
  }
 return(
  <table>
    <tbody>
   <tr>
    <td><h2>Statistics</h2></td>
   </tr>
    <StatisticLine text = "good" value={props.good}/> 
    <StatisticLine text = "neutral" value={props.neutral}/>
    <StatisticLine text = "bad" value={props.bad}/>
    <StatisticLine text = "all" value={all}/>
    <StatisticLine text = "average" value={average}/>
    <StatisticLine text = "positive" value={percentage + " %"}/>
    </tbody>
  </table>
 )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1) ;
  const handleNeutral = () => setNeutral(neutral + 1) ;
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Display/>
      <Button handleClick={handleGood} text ="good"/>
      <Button handleClick={handleNeutral} text ="neutral"/>
      <Button handleClick={handleBad} text ="bad"/>
      <Statistics good = {good}  neutral = {neutral} bad = {bad} />
     
    </div>
  )
}

export default App