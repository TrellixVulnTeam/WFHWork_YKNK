import React, { useState, useEffect } from 'react';
var axios = require('axios');
export const GoogleApiLocation = () => {
	const [ state, setstate ] = useState({
		name: '',
		street_address: '',
		city: '',
		state: '',
		zip_code: '',
		googleMapLink: ''
	});
	const [ autoComplete, setAutoComplete ] = useState(null);

	useEffect(() => {
		const get = async () => {
			const key = 'AIzaSyCUOnKfWL1MpBjQrUkEj6f9e8xzuW-I0hg';
			const url =
				'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyCUOnKfWL1MpBjQrUkEj6f9e8xzuW-I0hg';
			const res = await axios.get(url);
			console.log(res);
		};
		get();
	}, []);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setstate({ ...state, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div>
				<h4>Add New Parlor</h4>
				<form onSubmit={handleSubmit}>
					<input id="autocomplete" type="text" />
					<input type="text" name="name" value={state.name} placeholder={'Name'} onChange={handleChange} />
					<input
						name={'street_address'}
						value={state.street_address}
						placeholder={'Street Address'}
						onChange={handleChange}
					/>
					<input type="text" name="city" value={state.city} placeholder={'City'} onChange={handleChange} />
					<input type="text" name="state" value={state.state} placeholder={'State'} onChange={handleChange} />
					<input
						type="text"
						name="zip_code"
						value={state.zip_code}
						placeholder={'Zipcode'}
						onChange={handleChange}
					/>
					<button onSubmit={handleSubmit}>Submit</button>
				</form>
			</div>
		</div>
	);
};
export default GoogleApiLocation;
// https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters

// AIzaSyCUOnKfWL1MpBjQrUkEj6f9e8xzuW-I0hg
