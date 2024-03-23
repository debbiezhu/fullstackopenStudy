const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}
const App = () => {
  const course = 'half stack application development'
  const part1 = {
    name: 'fundamentals of react',
    exercises: 10
  }
  const part2 = {
    name: 'using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'state of a component',
    exercises: 14
  }
  const total = part1.exercises + part2.exercises + part3.exercises
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={total} />
    </div>
  )
}

export default App
