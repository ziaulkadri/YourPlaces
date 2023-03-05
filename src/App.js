import React from 'react';

import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import Users from './user/pages/Users';
import UpdatePlace from './places/pages/UpdatePlace';

function App() {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Routes>
					<Route path="/" element={<Users />} />
					<Route path="/:userId/places" element={<UserPlaces />} />
					<Route path="/places/new" element={<NewPlaces />} />
					<Route path="/places/:placeId" element={<UpdatePlace />} />

					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
