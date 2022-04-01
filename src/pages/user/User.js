import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../user/User.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import axiosInstance from '../../axiosInstance';
import { UserContext } from '../../contexts/UserContext';

function User() {
	// Checking if user is logged in or not using Context
	// bringing loggedIn and user information from the context
	const { loggedIn, user, setRestaurantCreated, setNewRestaurant } =
		useContext(UserContext);

	// Creating state to store the orders and reviews of the specific user
	const [orders, setOrders] = useState([]);
	const [reviews, setReviews] = useState([]);

	const [error, setError] = useState();
	// Use state for creating a new restaurant
	const [newRestaurantName, setNewRestaurantName] = useState('');
	const [newRestaurantEmail, setNewRestaurantEmail] = useState('');
	const [newRestaurantAddress, setNewRestaurantAddress] = useState('');

	const history = useHistory(); //It is used to direct to the another page

	// we need to fetch the user's orders
	const fetchUserOrder = async () => {
		const data = await axiosInstance.get(`/users/${user._id}/orders`);
		const orders = await data.json();
		setOrders(orders.message);
	};

	// Fetching the user's reviews
	const fetchUserRestaurants = async () => {
		const data = await axiosInstance.get(`/users/${user._id}/reviews`);
		const reviews = await data.json();
		setReviews(reviews.message);
	};

	useEffect(() => {
		return () => {
			fetchUserOrder();
			fetchUserRestaurants();
		};
	}, []);

	// get the restaurant
	const addRestaurant = async () => {
		const res = await axiosInstance.post('/restaurants', {
			name: newRestaurantName,
			email: newRestaurantEmail,
			address: newRestaurantAddress,
		});
		const data = await res.json();
		if (!res.ok) {
			setError(data.message);
		}
		if (res.ok) {
			setError(null);
			const restaurantId = data.message._id;
			setRestaurantCreated(true);
			setNewRestaurant(data.message);
			// returning to prevent memory leak
			return history.push(`/restaurant/${restaurantId}`);
		}
	};

	return (
		<main>
			{/* If the user is logged in we will be displaying following information */}
			{loggedIn ? (
				<>
					{/* user is taking name from created User context */}
					<h1>Welcome {user.name}</h1>
					<h1 className='order-head'>Your Previous Orders</h1>
					<div className='restaurant-orders'>
						{orders.map((orderItem) => (
							<div className='orders' key={orderItem._id}>
								<h2>{orderItem.restaurant_id.name}</h2>
								<div>
									{orderItem.items.map((orderFoodsItems) => (
										<div key={uuidv4()}>{orderFoodsItems} </div>
									))}
								</div>
							</div>
						))}
					</div>
					{/* User's reviews from various restaurants */}
					<h1 className='reviews-heading'>Reviews</h1>
					<div className='restaurant-reviews'>
						{reviews.map((reviewItem) => (
							<div className='reviews' key={reviewItem._id}>
								<h2 className='review-user'>{reviewItem.restaurant_id.name}</h2>
								<div className='review-content'>{reviewItem.content}</div>
								<div className='review-rating' key={reviewItem.rating[0]._id}>
									<div className='food-rating'>
										Food : {reviewItem.rating[0].food}/10{' '}
									</div>
									<div className='service-rating'>
										Service : {reviewItem.rating[0].service}/10{' '}
									</div>
									<div className='environment-rating'>
										Environment : {reviewItem.rating[0].environment}/10{' '}
									</div>
									<div className='price-rating'>
										Price : {reviewItem.rating[0].price}/10{' '}
									</div>
								</div>
							</div>
						))}
					</div>
					<h1>Starting your own Business?</h1>
					<h2>Register for a new Restaurant </h2>
					<div className='create-restaurant-form'>
						<label> Name of the Restaurant</label>
						<input
							type='text'
							className='add-todo-input'
							value={newRestaurantName}
							onChange={(e) => setNewRestaurantName(e.target.value)}
						/>
						<label> Email</label>
						<input
							type='text'
							className='add-todo-input'
							value={newRestaurantEmail}
							onChange={(e) => setNewRestaurantEmail(e.target.value)}
						/>
						<label>Location</label>
						<input
							type='text'
							className='add-todo-input'
							value={setNewRestaurantAddress}
							onChange={(e) => setNewRestaurantAddress(e.target.value)}
						/>
						<button className='restaurant-btn' onClick={addRestaurant}>
							Create Restaurant
						</button>
					</div>
				</>
			) : (
				<h1>Please Login first to visit this page</h1>
				//Ternary operator is ending here
			)}
		</main>
	);
}

export default User;
