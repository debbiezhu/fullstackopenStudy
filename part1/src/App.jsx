const Hello = () => {
  return (
    <div>
      <p>hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>grettings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App