import { Form, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

function Home(){
	const [data, setData] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [message, setMessage] = useState("");
	const [clicked, setClicked] = useState(false);

	const onChangeHandler = (message) => {
		const userInput = message.target.value.toUpperCase()
		setMessage(inputValue)
	}

	const onClickHandler = () => {
		setClicked(true)
		setSelectedCountry(message)
	}

	useEffect(() =>{
		const fetchCountry = async () => {
			try {
				const response = await fetch(`http://127.0.0.1:8000/api/country/`);
				if (!response.ok) {
					throw new Error('Bad Response');
				}
				const data = await response.json();
				setData(data)
				} catch (errro) {
					console.error("Error fetching countries:", error);
				}
			};
			fetchCountries();
	}, []);

	useEffect(() => {

		const filtered = countries.filter(country =>
			country.name.toUpperCase().includes(selectedCountry)
			);
			setFilteredCountries(filtered);

		}, [selectedCountry, data]);
			
		const displayData = () => {

			return (
			<div>
				{filteredCountries.map((country) => (
				<ListGroup key={country}>
					<ListGroup.Item> {country} </ListGroup.Item>
				</ListGroup>
				))}
			</div>
		);
		}
			
	return(
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh'}}>
			<div style={{width: '35rem', textAlign: 'center', marginBottom: '20px'}}>
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
