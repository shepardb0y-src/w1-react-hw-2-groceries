const groceryList = [
  {
    item: "hot-sauce",
    brand: "reds-hot",
    units: "200",
    quantity: 1000,
    isPurchased: false,
  },
  {
    item: "ketchup",
    brand: "heinz",
    units: "450",
    quantity: 0,
    isPurchased: false,
  },
  {
    item: "salt",
    brand: "sea",
    units: "800",
    quantity: 50,
    isPurchased: false,
  },
];
// console.table(groceryList);

class App extends React.Component {
  state = {
    grocery: groceryList,
    value: "",
    item: "item name here",
    brand: "",
    units: "units",
    quantity: "0",
    isPurchased: false,
  };
  //creating react form/input
  //evertime we type something we react will invoke handlchangeconsole.log(event) onchange is an event listener
  //console.log(event.target) shows the targeted input
  //console.log(event.target.vaule) shows the letter in the console one letter at a time
  handleChange = (event) => {
    console.log(event.target.value);
    ///arrow funtion automatically binds the functtion to the state
    //dont update state directly like this
    // this.state.value = event.target.value;
    //correect way to MUTATE STATE is to use set state witihin a  handle function.. state is an Object make sure set state has currly braces
    this.setState({
      // handled on input feild  value: event.target.value,
      //handles all input fields
      //event.target.id allows us to use the id specified in the form  input to make our handle change dynamic
      [event.target.id]: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      item: this.state.item,
      quantity: this.state.quantity,
      units: this.state.units,
    };

    this.setState({
      grocery: [newItem, ...this.state.grocery],
      ///resets input
      value: "",
      item: "item name here",
      brand: "",
      units: "units",
      quantity: "0",
      isPurchased: true,
    });
  };

  handleclick = (e) => {
    e.preventDefault();

    this.setState({
      // grocery: grocerylist gets risd of all the new additions
      grocery: groceryList,
      value: "",
      item: "item name here",
      brand: "",
      units: "units",
      quantity: "0",
      isPurchased: false,

      ///resets input
    }),
      console.log(this.state);
  };

  render() {
    console.log(this.state.value);
    return (
      <div>
        <h1>Phabbz Plaza</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Item:</label>
          <input
            type="text"
            /// id and hmtlfor connects the label to the input field
            id="item"
            ///connect to state value
            value={this.state.item}
            //onChange is an event listener
            onChange={this.handleChange}
          />
          <label htmlFor="name">Quantity:</label>
          <input
            type="text"
            /// id and hmtlfor connects the label to the input field
            id="quantity"
            ///connect to state value
            value={this.state.quantity}
            //onChange is an event listener
            onChange={this.handleChange}
          />
          <label htmlFor="name">Units:</label>
          <input
            type="text"
            /// id and hmtlfor connects the label to the input field
            id="units"
            ///connect to state value
            value={this.state.units}
            //onChange is an event listener
            onChange={this.handleChange}
          />
          <input type="submit"></input>
          <button onClick={this.handleclick}>Remove</button>
        </form>
        <div>
          <h3>Preview Products</h3>

          <h4>{this.state.item}</h4>
          <h4>{this.state.quantity}</h4>
          <h4>{this.state.units}</h4>
        </div>
        {!this.state.grocery.isPurchased === false ? this.state.grocery : null}
        <ul>
          {this.state.grocery.map((grocerylist) => (
            <li>
              {grocerylist.item} {grocerylist.quantity} {grocerylist.units}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
