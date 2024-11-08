import { useState } from 'react'

const Button = ({ clickHandle, text }) => (
    <button onClick={clickHandle}>{text}</button>
)

const ShowStatics = ({ good, neutral, bad }) => {
    const sumOfAll = good + neutral + bad
    return (
        <div>
            <p>
                good {good}<br />
                neutral {neutral}<br />
                bad {bad}<br />
                all {sumOfAll}<br />
                average {(good + bad * -1) / sumOfAll}<br />
                positive {(good / sumOfAll) * 100} %
            </p>
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
            <h1>statics</h1>
            <ShowStatics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
