import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavLinks.css';
import { AuthContext } from '../context/auth-context';

const NavLinks = () => {
	const auth = useContext(AuthContext);
	const navigate = useNavigate();

	const LogoutHandler = () => {
		auth.logout();
		navigate('/auth');
	};
	return (
		<ul className="nav-links">
			<li>
				<NavLink to="/" exact>
					All Users
				</NavLink>
			</li>
			{auth.isLoggedIn && (
				<li>
					<NavLink to="/u1/places"> My Places</NavLink>
				</li>
			)}
			{auth.isLoggedIn && (
				<li>
					<NavLink to="/places/new">Add Places</NavLink>
				</li>
			)}
			{!auth.isLoggedIn && (
				<li>
					<NavLink to="/auth">Authenticate</NavLink>
				</li>
			)}
			{auth.isLoggedIn && (
				<li>
					<button onClick={LogoutHandler}>Logout</button>
				</li>
			)}
		</ul>
	);
};

export default NavLinks;
