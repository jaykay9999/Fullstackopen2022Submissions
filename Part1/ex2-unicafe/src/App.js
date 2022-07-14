

import { useState } from 'react'



const Button = (props) => (

  <button onClick={props.onClickHandler}>
    {props.text}
     </button>
)



const StatisticLine = props => 
  <tr>
    <td>{props.text}</td>  
    <td>{props.value}</td>
  </tr>



const Statistics = (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad

  let all = good + neutral + bad
  let average = (good - bad)/all
  let positive = good/all

  if(all > 0){
    return(
      <div>
        <table>
        <tbody>
        <StatisticLine text = {"good"} value ={good} />
        <StatisticLine text = {"neutral"} value ={neutral} />
        <StatisticLine text = {"bad"} value ={bad} />
         <StatisticLine text = {"all"} value ={all} />
        <StatisticLine text = {"average"} value ={average} />
        <StatisticLine text = {"positive"} value ={positive} />
        </tbody>
        </table>

      </div>)
  }
  else{
    return(
      <div>
        <h3>No feedback given</h3>
      </div>
    )
  }
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodHandleClick = () => {
    setGood(good + 1)
}

  const neutralHandleClick = () => {
    setNeutral(neutral + 1) 
}

  const badHandleClick = () => {
    setBad(bad + 1)
}



  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClickHandler = {goodHandleClick} text ={"Good :) "} />
      <Button onClickHandler = {neutralHandleClick} text = "Neutral :|" />
      <Button onClickHandler = {badHandleClick} text = {"Bad :("}  />
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral}  bad = {bad}></Statistics>

    </div>
  )
}

export default App

