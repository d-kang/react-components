// TODO
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <GroceryList onClick={onListItemClick} groceryList={['Paper Towels', 'Cereal']}/>
      </div>
    )
  }
}

var onListItemClick = (event) => {
    console.log('I got clicked');
  };

const GroceryList = (props) => {
  return (
    <div>
      <ul>
        <li onClick={onListItemClick}>{props.groceryList[0]}</li>
        <li onClick={onListItemClick}>{props.groceryList[1]}</li>
      </ul>
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
