import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  )
}
    
const Statistics = ({ good, neutral, bad }) => {
  const Average = (good-bad)/(good+neutral+bad)
  const Positive = (good)/(good+neutral+bad)*100 + " %"

  if (good+neutral+bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="average" value ={Average} />
        <StatisticLine text="positive" value ={Positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  
  const title1 = 'give feedback'
  const title2 = 'statistics'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>{title1}</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>{title2}</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App