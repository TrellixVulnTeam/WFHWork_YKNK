import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { ReactComponent as LocationIcon } from '../../assets/icons/locationSvg.svg';

const AutoCompleteSearch = ({ state, setStateFunction,addressValue }) => {
	const [searchQuery, setSeacrhQuery] = useState('');

	const handleChange = (value) => {
		setSeacrhQuery(value);
	};
	const handleSelect = () => {
		geocodeByAddress(searchQuery)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => {
				
				setStateFunction({
					...state,
					latitude: latLng.lat,
					longitude: latLng.lng
				});
			})
			.catch((error) => console.error('Error', error));
	};
	const handleSelectTerm = (evt) => {
		setSeacrhQuery(evt.target.outerText);
	};

	return (
		<div className="section-top__autoCompleteSearch">
			<PlacesAutocomplete value={searchQuery} onChange={handleChange} onSelect={handleSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							{...getInputProps({
								placeholder: 'Address',
								className: 'location-search-input'
							})}
							className="section-top__autocomplete-search-input"
							value={addressValue}
						/>
						<div className="autocomplete-dropdown-container">
							<div className="section-top__autocomplete-search-dropDown">
								{suggestions.map((suggestion, idx) => {
									const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
									// inline style for demonstration purpose
									const style = suggestion.active
										? { backgroundColor: '#ffffff', cursor: 'pointer' }
										: {
											backgroundColor: '#ffffff',
											cursor: 'pointer'
										};
									return (
										<div
											{...getSuggestionItemProps(suggestion, {
												className,
												style
											})}
											key={idx}
										>
											<div
												style={{ display: 'flex', alignItems: 'center' }}
												className="section-top__svg-and-location"
											>
												<LocationIcon height="7px" width="7px" fill="grey" />
												<p
													className="section-top__autocomplete-search-items"
													onClick={handleSelectTerm}
												>
													{suggestion.description}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		</div>
	);
};
export default AutoCompleteSearch;
