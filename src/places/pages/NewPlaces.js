import React from 'react';
import Input from '../../shared/FormElements/Input';
import './NewPlaces.css';
const NewPlaces = () => {
	return (
		<form className="place-form">
			<Input element="input" type="text" label="Title" />
		</form>
	);
};

export default NewPlaces;
