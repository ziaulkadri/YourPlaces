import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../util/validators';
import './PlaceForm.css';
import Button from '../../shared/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';

const NewPlaces = () => {
	const [formState, InputHandler] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
			address: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const placeSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};

	return (
		<form className="place-form" onSubmit={placeSubmitHandler}>
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title"
				onInput={InputHandler}
			/>
			<Input
				id="description"
				element="textarea"
				label="description"
				validators={[VALIDATOR_MINLENGTH(5)]}
				errorText="Please enter a valid description at least 5 characters"
				onInput={InputHandler}
			/>

			<Input
				id="address"
				element="input"
				label="address"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid address "
				onInput={InputHandler}
			/>
			<Button type="submit" disabled={!formState.isValid}>
				Add Place
			</Button>
		</form>
	);
};

export default NewPlaces;
