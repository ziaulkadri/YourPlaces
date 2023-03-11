import React, { useCallback, useState } from 'react';

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
import Auth from './user/pages/Auth';

import { AuthContext } from './shared/context/auth-context';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = useCallback(() => {
		setIsLoggedIn(true);
	}, []);
	const logout = useCallback(() => {
		setIsLoggedIn(false);
	}, []);
	return (
		<AuthContext.Provider
			value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
		>
			<Router>
				<MainNavigation />
				<main>
					<Routes>
						<Route path="/" element={<Users />} />
						<Route path="/:userId/places" element={<UserPlaces />} />
						<Route path="/places/new" element={<NewPlaces />} />
						<Route path="/places/:placeId" element={<UpdatePlace />} />
						<Route path="/auth" element={<Auth />} />

						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
