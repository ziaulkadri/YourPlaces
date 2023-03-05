import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../shared/FormElements/Button';
import Input from '../../shared/FormElements/Input';
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
	const placeId = useParams().placeId;

	const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

	if (!identifiedPlace) {
		return (
			<div className="center">
				<h2>Could not find place</h2>
			</div>
		);
	}

	return (
		<form className="place-form">
			<Input
				id="title"
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title"
				onInput={() => {}}
				value={identifiedPlace.title}
				valid={true}
			/>
			<Input
				id="description"
				element="textarea"
				type="text"
				label="Description"
				validators={[VALIDATOR_MINLENGTH(5)]}
				errorText="Please enter a valid description min 5 characters"
				onInput={() => {}}
				value={identifiedPlace.description}
				valid={true}
			/>
			<Button type="submit" disabled={true}>
				UPDATE PLACE
			</Button>
		</form>
	);
};

export default UpdatePlace;
