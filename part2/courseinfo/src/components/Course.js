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

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <strong>total of {total} exercises</strong>;
};

const Course = ({ courses }) =>
  courses.map((course) => (
    <div key={course.id}>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  ));

export default Course;
