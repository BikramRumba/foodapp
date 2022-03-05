import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);

	const [user, setUser] = useState(null);

	const value = {
		setLoggedIn,
		loggedIn,
		user,
		setUser,
	};

	return (
		<AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
	);
};

export default AuthContextProvider;
