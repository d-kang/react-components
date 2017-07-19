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




class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          { this.props.groceryList.map((item, i) =>
          <li onClick={onListItemClick}>{item}</li>) }
          {/* <li onClick={onListItemClick}>{props.groceryList[0]}</li>
          <li onClick={onListItemClick}>{props.groceryList[1]}</li> */}
        </ul>
      </div>
    )
  }

}
// const GroceryList = (props) => {
//   return (
//     <div>
//       <ul>
//         { props.groceryList.map(item =>
//         <li onClick={onListItemClick}>{item}</li>) }
//         {/* <li onClick={onListItemClick}>{props.groceryList[0]}</li>
//         <li onClick={onListItemClick}>{props.groceryList[1]}</li> */}
//       </ul>
//     </div>
//
//   )
// }

ReactDOM.render(<App />, document.getElementById('app'))
