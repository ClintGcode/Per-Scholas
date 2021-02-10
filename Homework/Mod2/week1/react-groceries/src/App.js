import React, { useState, useEffect } from 'react';
import './index.css';


const App = () => {

    const [ items, setItems ] = useState(
        [
			{ itemName: 'water', brand: 'poland spring', units: 1, quantity: 1, isPurchased: true },
			{ itemName: 'orange juice', brand: 'tropicana', units: 1, quantity: 1, isPurchased: true },
			{ itemName: 'juice', brand: 'caprisun', units: 6, quantity: 2, isPurchased: true }
		]
    );

	const nameEl = React.useRef(null)
	const brandEl = React.useRef(null)
	const unitsEl = React.useRef(null)
	const quantityEl = React.useRef(null)

	const [inputValue, setInputValue] = useState(
			{ itemName: '', brand: '', units: '', quantity: '', isPurchased: true }
    );

	const handleChange = (event) => {
		setInputValue({
			itemName: nameEl.value,
			brand: brandEl.value,
			units: unitsEl.value,
			quantity: quantityEl.value,
			isPurchased: true
		})
		console.log(event.target.id, event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		const newItem = inputValue;
		const newItems = [newItem, ...items];

		setItems(newItems);
		setInputValue('');

		console.log(items);
	}

	return (
		<div className="container">
			<div className="header">

				<div className="header-title">
					<h1>üShopper</h1>
					<h4>The Grocery List You Won't Forget</h4>
				</div>

				<div className="form-container">
					<form onSubmit={handleSubmit}>
						<h3>Remeber to pick up</h3>
						<label htmlFor="item" value={items.name}></label>
						<input ref={nameEl} value={inputValue.itemName} onChange={handleChange} className="addItemInput" id="item" placeholder="Item" style={{textAlign:"center"}}></input>
						
						<label htmlFor="brand" value={items.brand}></label>
						<input ref={brandEl} value={inputValue.brand} onChange={handleChange} className="addItemInput" id="brand" placeholder="Brand" style={{textAlign:"center"}}></input>
						
						<label htmlFor="units" value={items.units}></label>
						<input ref={unitsEl} value={inputValue.units} onChange={handleChange} className="addItemInput" id="units" placeholder="Units" style={{textAlign:"center"}}></input>
						
						<label htmlFor="quantity" value={items.quantity}></label>
						<input ref={quantityEl} value={inputValue.quantity} onChange={handleChange} className="addItemInput" id="quantity" placeholder="Quantity" style={{textAlign:"center"}}></input>
						
						<label htmlFor="addItem" value={items.isPurchased}></label>
						<input type="submit" value="Add to cart"></input>
					</form>
				</div>

				<div className="groceryList">
					<h3 className="listName">Grocery List</h3>
					{items.map((item, index) => item.isPurchased ? (
						<form>
								<label htmlFor="item" value={items.name}></label>
								<input id="item" placeholder="Item" style={{textAlign:"center"}} value={items[index].itemName}></input>

								<label htmlFor="brand" value={items.brand}></label>
								<input id="brand" placeholder="Brand" style={{textAlign:"center"}} value={items[index].brand}></input>
								
								<label htmlFor="units" value={items.units}></label>
								<input id="units" placeholder="Units" style={{textAlign:"center"}}value={items[index].units}></input>
								
								<label htmlFor="quantity" value={items.quantity}></label>
								<input id="quantity" placeholder="Quantity" style={{textAlign:"center"}} value={items[index].quantity}></input>
								
								<label htmlFor="removeItem" value={items.isPurchased}></label>
								<button>remove</button>  
						</form>
					) : (
						null
					))}
				</div>

			</div>	
		</div>
	)
};

export default App;