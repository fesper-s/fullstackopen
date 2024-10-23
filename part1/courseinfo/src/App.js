const Header = (props) => (
    <h1>{props.course}</h1>
)

const Part = (props) => (
    <p>{props.part.name} {props.part.exercises}</p>
)

const Content = (props) => (
    <div>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </div>
)

const Total = (props) => (
    <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
)

const App = () => {
    const course = 'Desenvolvimento de aplicação Half Stack'
    const parts = [
        {
            name: 'Fundamentos da biblioteca React',
            exercises: 10
        },
        {
            name: 'Usando props para passar dados',
            exercises: 7
        },
        {
            name: 'Estado de um componente',
            exercises: 14
        },
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App;
