import React from 'react';
import Input from '../../shared/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../util/validators';
import './NewPlaces.css';
const NewPlaces = () => {
	return (
		<form className="place-form">
			<Input
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title"
			/>
		</form>
	);
};

export default NewPlaces;
