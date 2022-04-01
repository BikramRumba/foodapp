import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);

	const [user, setUser] = useState();

	//created an context for the restaurant
	const [restaurantCreated, setRestaurantCreated] = useState(false);

	//creating a restaurant
	const [newRestaurant, setNewRestaurant] = useState(null);
	const value = {
		setLoggedIn,
		loggedIn,
		user,
		setUser,
		restaurantCreated,
		setRestaurantCreated,
		newRestaurant,
		setNewRestaurant,
	};

	return (
		<UserContext.Provider value={value}>{props.children}</UserContext.Provider>
	);
};

export default UserContextProvider;
