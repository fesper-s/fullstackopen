const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  const partsElements = parts.map((part) => <Part key={part.id} part={part} />);

  return <div>{partsElements}</div>;
};

const Total = ({ sum }) => <p>Number of exercises{sum}</p>;

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
