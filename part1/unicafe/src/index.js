import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ text, value }) => <div>{text} {value}</div>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = (increaseFunc, value) => () => increaseFunc(value + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseByOne(setGood, good)} text="good" />
      <Button handleClick={increaseByOne(setNeutral, neutral)} text="neutral" />
      <Button handleClick={increaseByOne(setBad, bad)} text="bad" />
      <h1>statistics</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={good + neutral + bad} />
      <Statistics text="average" value={(good + (bad * -1))/(good + neutral + bad)} />
      <Statistics text="positive" value={good/(good + neutral + bad) + " %"} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)