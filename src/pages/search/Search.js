import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';

function Search() {
	const [restaurant, setRestaurant] = useState([]);
	const location = useLocation();

	// console.log('location', location);
	// console.log('searched restaurant is');
	const searchParams = new URLSearchParams(location.search);
	console.log('name', searchParams.get('name'));

	useEffect(() => {
		searchRestaurant(searchParams.get('name'));
	}, []);

	const searchRestaurant = async (e) => {
		try {
			const res = await axiosInstance.get(`/search/restaurant?name=${e}`);
			console.log(res);
			if (res.status !== 200) {
				throw new Error(`Error! status ${res.status}`);
			}
			const { result } = res.data;
			setRestaurant(result);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<main>
			{restaurant.map((value, key) => (
				<div key={key}>{value.name}</div>
			))}
		</main>
	);
}

export default Search;
