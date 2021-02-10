const App = () => {

    const [ items, setItems ] = useState(
        [{ itemName: '', brand: '', units: 0, quantity: 0, isPurchased: false }]
    );

    const [ inputValue, setInputValue ] = useState('');
    const [ totalItemCount, setTotalItemCount ] = useState('');

    return (
        <div className="container">
            <div className="header">

                <div className="header-title">
                    <h1>üShopper</h1>
                    <h4>The Grocery List You Won't Forget</h4>
                </div>

                <div className="form-container">
                    <form>
                        <h3>Remeber to pick up</h3>
                        <label htmlFor="item" value={this.state.item}></label>
                        <input id="item" placeHolder="Item" style={{textAlign:"center"}}></input>
                        <label htmlFor="brand" value={this.state.brand}></label>
                        <input id="brand" placeHolder="Brand" style={{textAlign:"center"}}></input>
                        <label htmlFor="units" value={this.state.units}></label>
                        <input id="units" placeHolder="Units" style={{textAlign:"center"}}></input>
                        <label htmlFor="quantity" value={this.state.quantity}></label>
                        <input id="quantity" placeHolder="Quantity" style={{textAlign:"center"}}></input>
                        <label htmlFor="addItem" value={this.state.isPurchased}></label>
                        <button>Add to cart</button>
                    </form>
                </div>
            </div>
            
        </div>
    )

}

ReactDOM.render(
    App,
    document.getElementById("app")     
)

