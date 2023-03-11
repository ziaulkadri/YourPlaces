import React from 'react';
import './PlaceList.css';
import Card from '../../shared/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/FormElements/Button';

const PlaceList = (props) => {
	if (props.items.length === 0)
		return (
			<div className="place-list center">
				<Card>
					<h2>No places found . Maybe create one ?</h2>
					<Button to="/places/new">Share Place</Button>
				</Card>
			</div>
		);
	return (
		<ul className="place-list">
			{props.items.map((place) => (
				<PlaceItem
					key={place.id}
					id={place.id}
					image={place.imageUrl}
					title={place.title}
					description={place.description}
					creatorId={place.creaatorId}
					coordinates={place.location}
					address={place.address}
				/>
			))}
		</ul>
	);
};

export default PlaceList;
