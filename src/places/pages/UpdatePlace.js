import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../shared/FormElements/Button';
import Input from '../../shared/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../util/validators';
import './PlaceForm.css';
const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Emprire State Building',
		description: 'One of the most famous sky scrapper in the world',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/d/d4/Manhattan_and_the_Central_Park_from_the_Empire_State_Building.jpg',
		address: 'Skyscraper in New York City, New York',
		location: {
			lat: 40.748492,
			lng: -73.985699,
		},
		creator: 'u1',
	},
	{
		id: 'p2',
		title: ' State ',
		description: 'One of the most famous sky scrapper in the world',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/d/d4/Manhattan_and_the_Central_Park_from_the_Empire_State_Building.jpg',
		address: 'Skyscraper in New York City, New York',
		location: {
			lat: 40.748492,
			lng: -73.985699,
		},
		creator: 'u2',
	},
	{
		id: 'p3',
		title: '  Building',
		description: 'One of the most famous sky scrapper in the world',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/d/d4/Manhattan_and_the_Central_Park_from_the_Empire_State_Building.jpg',
		address: 'Skyscraper in New York City, New York',
		location: {
			lat: 40.748492,
			lng: -73.985699,
		},
		creator: 'u3',
	},
	{
		id: 'p4',
		title: 'yuututyuyu',
		description: 'One of the most famous sky scrapper in the world',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/d/d4/Manhattan_and_the_Central_Park_from_the_Empire_State_Building.jpg',
		address: 'Skyscraper in New York City, New York',
		location: {
			lat: 40.748492,
			lng: -73.985699,
		},
		creator: 'u4',
	},
	{
		id: 'p5',
		title: 'uhihii',
		description: 'One of the most famous sky scrapper in the world',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/d/d4/Manhattan_and_the_Central_Park_from_the_Empire_State_Building.jpg',
		address: 'Skyscraper in New York City, New York',
		location: {
			lat: 40.748492,
			lng: -73.985699,
		},
		creator: 'u5',
	},
];

const UpdatePlace = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const placeId = useParams().placeId;

	const [formState, InputHandler, setFormData] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

	useEffect(() => {
		setFormData(
			{
				title: {
					value: identifiedPlace.title,
					isValid: true,
				},
				description: {
					value: identifiedPlace.description,
					isValid: true,
				},
			},
			true
		);
		setIsLoading(false);
	}, [setFormData, identifiedPlace]);

	if (!identifiedPlace) {
		return (
			<div className="center">
				<h2>Could not find place</h2>
			</div>
		);
	}
	const placeUpdateSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};
	if (!isLoading) {
		return (
			<div className="center">
				<h2>Loading.....</h2>
			</div>
		);
	}
	return (
		<form className="place-form" onSubmit={placeUpdateSubmitHandler}>
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title"
				onInput={InputHandler}
				initialValue={formState.inputs.title.value}
				initialValid={formState.inputs.title.isValid}
			/>
			<Input
				id="description"
				element="textarea"
				type="text"
				label="Description"
				validators={[VALIDATOR_MINLENGTH(5)]}
				errorText="Please enter a valid description min 5 characters"
				onInput={InputHandler}
				initialValue={formState.inputs.description.value}
				initialValid={formState.inputs.description.isValid}
			/>
			<Button type="submit" disabled={!formState.isValid}>
				UPDATE PLACE
			</Button>
		</form>
	);
};

export default UpdatePlace;
