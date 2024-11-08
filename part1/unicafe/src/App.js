import { useState } from 'react'

const Button = ({ clickHandle, text }) => (
    <button onClick={clickHandle}>{text}</button>
)

const StatisticsLine = ({ text, value }) => (
    <div>
        {text} {value}
    </div>
)

const Statistics = ({ good, neutral, bad }) => {
    const sumOfAll = good + neutral + bad

    if (sumOfAll === 0)
        return <p>No feedback given</p>

    return (
        <div>
            <StatisticsLine text={'good'} value={good} />
            <StatisticsLine text={'neutral'} value={neutral} />
            <StatisticsLine text={'bad'} value={bad} />
            <StatisticsLine text={'all'} value={sumOfAll} />
            <StatisticsLine text={'average'} value={(good + bad * -1) / sumOfAll} />
            <StatisticsLine text={'positive'} value={(good / sumOfAll) * 100 + ' %'} />
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button clickHandle={() => setGood(good + 1)} text={'good'} />
            <Button clickHandle={() => setNeutral(neutral + 1)} text={'neutral'} />
            <Button clickHandle={() => setBad(bad + 1)} text={'bad'} />
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
