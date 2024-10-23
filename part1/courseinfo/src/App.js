const Header = (props) => (
    <h1>{props.course}</h1>
)

const Part = (props) => (
    <p>{props.part} {props.exercises}</p>
)

const Content = (props) => (
    <div>
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
    </div>
)

const Total = (props) => (
    <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
)

const App = () => {
    const course = 'Desenvolvimento de aplicação Half Stack'
    const part1 = {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
    }
    const part2 = {
        name: 'Usando props para passar dados',
        exercises: 7
    }
    const part3 = {
        name: 'Estado de um componente',
        exercises: 14
    }

    return (
        <div>
            <Header course={course} />
            <Content
                part1={part1.name} exercises1={part1.exercises} 
                part2={part2.name} exercises2={part1.exercises}
                part3={part3.name} exercises3={part3.exercises} />
            <Total
                exercises1={part1.exercises}
                exercises2={part2.exercises}
                exercises3={part3.exercises} />
        </div>
    )
}

export default App;
