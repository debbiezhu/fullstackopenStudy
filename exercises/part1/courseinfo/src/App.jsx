const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map(part => <Part name={part.name} exercises={part.exercises} />)
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises {total}</p>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'half stack application development',
    parts: [
      {
        name: 'fundamentals of react',
        exercises: 10
      },
      {
        name: 'using props to pass data',
        exercises: 7
      },
      {
        name: 'state of a component',
        exercises: 14
      }
    ]
  }
  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default App
