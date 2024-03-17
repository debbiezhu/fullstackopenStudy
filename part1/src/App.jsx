const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name='peter'
  const age=10
  return (
    <div>
      <h1>grettings</h1>
      <Hello name='debbie' age={26+10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App