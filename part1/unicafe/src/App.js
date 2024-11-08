import { useState } from 'react'

const Button = ({ clickHandle, text }) => (
    <button onClick={clickHandle}>{text}</button>
)

const Statics = (props) => {
    const sumOfAll = props.good + props.neutral + props.bad

    if (sumOfAll === 0)
        return <p>No feedback given</p>

    return (
        <div>
            <p>
                good {props.good}<br />
                neutral {props.neutral}<br />
                bad {props.bad}<br />
                all {sumOfAll}<br />
                average {(props.good + props.bad * -1) / sumOfAll}<br />
                positive {(props.good / sumOfAll) * 100} %
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
            <Statics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App
