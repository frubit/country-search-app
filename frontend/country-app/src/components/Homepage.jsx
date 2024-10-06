import { Form, Button, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";

function Home(){
	const [data, setData] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [message, setMessage] = useState("");
	const [clicked, setClicked] = useState(false);

	const onChangeHandler = (message) => {
		const userInput = message.target.value;
		setMessage(userInput);
	}

	const onClickHandler = () => {
		setClicked(true);
		setSelectedCountry(message.toUpperCase());
	};

	// Fetches data
	useEffect(() =>{
		const fetchCountry = async () => {

				fetch(`http://127.0.0.1:8000/api/country/`)
				.then(response => response.json())
				.then(data => {
					console.log(data)
					setData(data)
				})
				.catch(error=> {
					console.error("Error Displaying Countries: ", error)
				})
			
			}
			fetchCountry();
	}, []);

	// Once data is fetched we must filter it for required country
	useEffect(() => {

		const filtered = data.filter(country =>
			country.name.toUpperCase().includes(selectedCountry) // Countries from backend and entered country are set to uppercase to remove case sensitivity
			);
			setFilteredCountries(filtered); // Creates list of required countries

		}, [selectedCountry, data]);
			
	const displayData = () => {
		// Checks if country is in database
		if(filteredCountries.length === 0){
			return(
				<h2> It looks like that country isn't in our database! </h2>
			);
		}
			// If in database outputs all countries matching search
			return(
			<div>
				{filteredCountries.map(country => (
				<ListGroup key={country.name}>
					<ListGroup.Item> {country.name} </ListGroup.Item>
				</ListGroup>
				))}
			</div>
		);
		}
			
	return(
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh'}}>
			<div style={{width: '35rem', textAlign: 'center', marginBottom: '20px'}}>
				// Search Bar
				<Form>
					<Form.Group>
						<Form.Label style={{fontSize:46, color:'rgb(84,107,89)'}}> Country </Form.Label>
						<Form.Control type="text"
						id="message"
						name="message"
						required
						onChange={onChangeHandler}
						value={message}
						className="input-box"
						placeholder="Country Name"
						/>
						
					</Form.Group>
				</Form>
				<Button onClick={onClickHandler} className="submit-button">
					Search
				</Button>
			</div>
			{clicked && displayData()}
		</div>
	)
}

export default Home
