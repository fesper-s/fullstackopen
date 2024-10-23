const Header = (props) => (
    <h1>{props.course.name}</h1>
)

const Part = (props) => (
    <p>{props.part.name} {props.part.exercises}</p>
)

const Content = (props) => (
    <div>
        <Part part={props.course.parts[0]} />
        <Part part={props.course.parts[1]} />
        <Part part={props.course.parts[2]} />
    </div>
)

const Total = (props) => (
    <p>
        Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </p>
)

const App = () => {
    const course = {
        name: 'Desenvolvimento de aplicação Half Stack',
        parts: [
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
    }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default App;
