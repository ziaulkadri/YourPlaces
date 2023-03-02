import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

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

const UserPlaces = () => {
	const { userId } = useParams();
	const LoadedPlaces = DUMMY_PLACES.filter((pl) => pl.creator === userId);

	return <PlaceList items={LoadedPlaces} />;
};

export default UserPlaces;
