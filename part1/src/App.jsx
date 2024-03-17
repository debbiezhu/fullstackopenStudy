const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const friends = ['jane', 'john']
  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App