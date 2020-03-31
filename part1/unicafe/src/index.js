import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = ({ count, text }) => {
  console.log(count, text)
  return (
  <div>{text} {count}</div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  
  if (total === 0) {
    return (
      <h1>No feedback given</h1>
    )
  }

  const score = good + (bad * -1)

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {score/total}</p>
      <p>positive {good/total + " %"}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = (increaseFunc, value) => () => increaseFunc(value + 1)
  // const sumTotal = (good, neutral, bad) => good + neutral + bad
  // const calcAvg = (good, neutral, bad) => (good + (bad * -1))/(good + neutral + bad)
  // const convertPercentage = (decimal) => ((decimal * 100) + " %")

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseByOne(setGood, good)} text="good" />
      <Button handleClick={increaseByOne(setNeutral, neutral)} text="neutral" />
      <Button handleClick={increaseByOne(setBad, bad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/* <h1>statistics</h1>
      <History count={good} text="good" />
      <History count={neutral} text="neutral" />
      <History count={bad} text="bad" />
      <History count={sumTotal(good, neutral, bad)} text="all" />
      <History count={calcAvg(good, neutral, bad)} text="average" />
      <History count={convertPercentage(good/sumTotal(good, neutral, bad))} text="positive" /> */}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)