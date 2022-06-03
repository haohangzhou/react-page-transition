import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.style.scss';

const styles = {
	active: {
		fontWeight: 'bold',
		color: 'red',
		borderBottom: '1px solid red',
	},
};

const Navigation = () => {
	return (
		<nav id='navigation'>
			<ul className='links'>
				<li>
					<NavLink
						to='/'
						style={({ isActive }) =>
							isActive ? styles.active : undefined
						}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/about'
						style={({ isActive }) =>
							isActive ? styles.active : undefined
						}>
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
