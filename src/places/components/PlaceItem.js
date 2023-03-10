import React, { Fragment, useContext, useState } from 'react';
import './PlaceItem.css';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import Modal from '../../shared/UIElements/Modal';
import Map from '../../shared/UIElements/Map';
import { AuthContext } from '../../shared/context/auth-context';

const PlaceItem = (props) => {
	const auth = useContext(AuthContext);
	const [showMap, setShowMap] = useState(false);
	const [showConfirmedModel, setShowConfirmedModel] = useState(false);

	const openMapHandler = () => {
		setShowMap(true);
	};

	const closeMapHandler = () => {
		setShowMap(false);
	};
	const showDeleteWarningHandler = () => {
		setShowConfirmedModel(true);
	};

	const cancelDeleteHandler = () => {
		setShowConfirmedModel(false);
	};

	const confirmDeleteHandler = () => {
		setShowConfirmedModel(false);
		console.log('DELETING....');
	};
	return (
		<Fragment>
			<Modal
				show={showMap}
				onCancel={closeMapHandler}
				header={props.address}
				contentClass="place-item__modal-content"
				footerClass="place-item__modal-actions"
				footer={<Button onClick={closeMapHandler}> Close</Button>}
			>
				<div className="map-container">
					<Map center={props.coordinates} zoom={16} />
				</div>
			</Modal>
			<Modal
				show={showConfirmedModel}
				onCancel={cancelDeleteHandler}
				header="Are you sure?"
				footerClass="place-item__modal-actions"
				footer={
					<Fragment>
						<Button inverse onClick={cancelDeleteHandler}>
							Cancel
						</Button>
						<Button danger onClick={confirmDeleteHandler}>
							Delete
						</Button>
					</Fragment>
				}
			>
				<p>
					Do you wants to proceed and delete this place Please note that it
					can't be undone thereafter
				</p>
			</Modal>
			<li className="place-item">
				<Card className="place-item__content">
					<div className="place-item__image">
						<img src={props.image} alt={props.title} />
					</div>
					<div className="place-item__info">
						<h2>{props.title}</h2>
						<h3>{props.address}</h3>
						<p>{props.description}</p>
					</div>
					<div className="place-item__actions">
						<Button inverse onClick={openMapHandler}>
							VIEW ON MAP
						</Button>
						{auth.isLoggedIn && (
							<Fragment>
								{' '}
								<Button to={`/places/${props.id}`}>EDIT</Button>
								<Button danger onClick={showDeleteWarningHandler}>
									DELETE
								</Button>{' '}
							</Fragment>
						)}
					</div>
				</Card>
			</li>
		</Fragment>
	);
};

export default PlaceItem;
