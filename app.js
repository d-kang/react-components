// TODO
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <GroceryList />
      </div>
    )
  }
}



const GroceryList = () => {
  return (
    <div>
      <ul>
        <li>Paper Towels</li>
        <li>Cereal</li>
      </ul>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
