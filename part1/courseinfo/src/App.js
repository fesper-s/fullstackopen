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
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
      <div>
            <Header course={course} />
            <Content
                part1={part1} exercises1={exercises1} 
                part2={part2} exercises2={exercises2}
                part3={part3} exercises3={exercises3} />
            <Total
                exercises1={exercises1}
                exercises2={exercises2}
                exercises3={exercises3} />
      </div>
  )
}

export default App;
