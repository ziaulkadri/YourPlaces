import React from 'react';

import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/Navigation/MainNavigation';
import Users from './user/pages/Users';

function App() {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Routes>
					<Route path="/" element={<Users />} />
					<Route path="/places/new" element={<NewPlaces />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
