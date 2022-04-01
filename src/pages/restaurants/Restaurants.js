import { useContext, useState, useEffect } from 'react';

import axiosInstance from '../../axiosInstance';
// import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../contexts/UserContext';
// Using moment to format the date that we are getting from the database
// import Moment from 'react-moment';

import '../restaurants/Restaurants.css';

function Restaurants({ match }) {
	const { loggedIn, restaurantCreated, user } = useContext(UserContext);

	//  getting restaurants, menus, reviews and orders from the database
	const [restaurant, setRestaurant] = useState([]);
	const [review, setReview] = useState([]);
	const [order, setOrder] = useState([]);
	const [menu, setMenu] = useState([]);

	// // For creating menu and adding item and price from the user inputs
	const [newMenuItemName, setNewMenuItemName] = useState('');
	const [newMenuItemPrice, setNewMenuItemPrice] = useState('');

	// //  creating new review from the user inputs

	const [reviewFood, setReviewFood] = useState('');
	const [reviewService, setReviewService] = useState('');
	const [reviewEnvironment, setReviewEnvironment] = useState('');
	const [reviewPrice, setReviewPrice] = useState('');
	const [reviewPresentation, setReviewPresentation] = useState('');

	// //For creating new order from the user inputs
	const [order1, setOrder1] = useState('');
	const [order2, setOrder2] = useState('');
	const [order3, setOrder3] = useState('');
	let randomSubTotal = Math.round(115 + Math.random() * 700); //generate random number between 115 to 500 for subtotal
	// //generating random subtotal for now, will implement total sum later
	/*
  Function to add the menu from the user's input
  Need to call post method from the backend
  */

	useEffect(() => {
		// fetchRestaurantDetails();
		// fetchRestaurantReviews();
		// fetchRestaurantsOrders();
	}, []);

	const fetchRestaurantDetails = () => {
		const response = axiosInstance.get(`/restaurants/${match.params.name}`);

		setRestaurant(response.data); // To set the restaurant information
	};
	// Fetches the restaurant's reviews from the backend
	const fetchRestaurantReviews = async () => {
		const response = await axiosInstance.get(
			`/restaurants/${match.params.id}/reviews`
		);
		setReview(response.data);
	};

	//fetches the restaurants's orders
	const fetchRestaurantsOrders = async () => {
		const response = await axiosInstance.get(
			`/restaurants/${match.params.id}/orders`
		);
		setOrder(response.data);
	};

	/*
  Function to add the menu from the user's input
  Need to call post method from the backend
  */
	const addMenu = async () => {
		const response = await axiosInstance.post(
			`/restaurants/addmenu/${match.params.id}`,
			{
				name: newMenuItemName,
				item_price: parseInt(newMenuItemPrice),
			}
		);
		setMenu(response.data);
		fetchRestaurantDetails(); //Refresh the page to see the added menu
	};
	/*
  Function to add the reviews from the user's input
  Need to call post method from the backend
  */

	const addReview = async () => {
		await axiosInstance.post(`/restaurants/${match.params.id}/reviews`, {
			user_id: `${user._id}`,
			rating: [
				{
					food: parseInt(reviewFood),
					service: parseInt(reviewService),
					presentation: parseInt(reviewPresentation),
					price: parseInt(reviewPrice),
					environment: parseInt(reviewEnvironment),
				},
			],
		});
		// setPopupActiveReview(false);
		fetchRestaurantReviews(); //Again refresh the page to see the added review
	};

	/*
  Function to add the orders from the user's input
  Need to call post method from the backend
  */
	const addOrder = async () => {
		await axiosInstance.post(`/restaurants/${match.params.id}/orders`, {
			user_id: `${user._id}`,
			items: [order1, order2, order3], //arrays of string
			total: randomSubTotal,
		});

		fetchRestaurantsOrders(); //Again refresh the page to see the added review
	};

	return (
		// Everything will be enclosed in Main div
		<main>
			<h1 className='restautant-heading'>Restaurant Name</h1>
			{/* ********************** For adding Additional Menu items in the restaurant **************** */}
			<>
				<section className='popup'>
					{/* <aside className='close-popup'> X </aside> */}
					{/*  For displaying Restaurants' Details  */}
					<article className='wrap' key={restaurant._id}>
						<aside className='restautant-address'>Address </aside>
						<aside className='restautant-address-value'>
							{restaurant.address}
						</aside>
					</article>

					{/* Menu Display */}
					<article className='restaurant-details'>
						<aside className='restaurant-menu'>Menu </aside>

						<aside className='menu'>
							<aside className='menu-name'>menuItem.name</aside>
							<aside className='menu-price'>$menuItem.item_price</aside>
						</aside>
					</article>
				</section>
			</>

			{/*  Restaurant's Reviews  */}
			<h1 className='reviews-heading'>Reviews</h1>

			<>
				{/* If popupActiveMenu is true, then only the form to create the restaurant will pop up */}
				<section className='popup'>
					{/* <article className='close-popup'> X </article> */}
					<div className='content'>
						<h3>Place an Order</h3>

						<label>Order 1</label>
						<input
							type='text'
							className='add-price-text'
							onChange={(e) => setOrder1(e.target.value)}
							value={order1}
						/>

						<label>Order 2</label>
						<input
							type='text'
							className='add-price-text'
							onChange={(e) => setOrder2(e.target.value)}
							value={order2}
						/>

						<label>Order 3</label>
						<input
							type='text'
							className='add-price-text'
							onChange={(e) => setOrder3(e.target.value)}
							value={order3}
						/>

						<button className='add-menu-button' onClick={addOrder}>
							Place Order
						</button>
					</div>
				</section>

				{/* end of popupActiveOrder */}
			</>
			{/* end of loggedIn */}
			{/*  For displaying Restaurants' reviews from Databse  */}
			<div className='restaurant-reviews'>
				{review.map((reviewItem) => (
					<div className='reviews' key={reviewItem._id}>
						<h2 className='review-user'>User has a review</h2>

						<div className='review-rating' key={reviewItem.rating[0]._id}>
							<div className='food-rating'>
								Food : {reviewItem.rating[0].food}/5{' '}
							</div>
							<div className='service-rating'>
								Service : {reviewItem.rating[0].service}/5{' '}
							</div>
							<div className='environment-rating'>
								Environment : {reviewItem.rating[0].environment}/5{' '}
							</div>
							<div className='price-rating'>
								Price : {reviewItem.rating[0].price}/5{' '}
							</div>
							<div className='presentation-rating'>
								Presentation : {reviewItem.rating[0].price}/5{' '}
							</div>
						</div>
					</div>
				))}
			</div>

			<article className='content'>
				<h3>Add Review</h3>

				<label>Presentation out of 5</label>
				<input
					type='text'
					className='add-menu-text'
					onChange={(e) => setReviewPresentation(e.target.value)}
					value={reviewPresentation}
				/>

				<label>Food Out of 5</label>
				<input
					type='number'
					className='add-price-text'
					onChange={(e) => setReviewFood(e.target.value)}
					value={reviewFood}
				/>

				<label>Service Out of 5</label>
				<input
					type='number'
					className='add-price-text'
					onChange={(e) => setReviewService(e.target.value)}
					value={reviewService}
				/>

				<label>Environment Out of 5</label>
				<input
					type='number'
					className='add-price-text'
					onChange={(e) => setReviewEnvironment(e.target.value)}
					value={reviewEnvironment}
				/>

				<label>Price Out of 5</label>
				<input
					type='number'
					className='add-price-text'
					onChange={(e) => setReviewPrice(e.target.value)}
					value={reviewPrice}
				/>

				<button className='add-menu-button' onClick={addReview}>
					Add Review
				</button>
			</article>
			<aside className='content'>
				<h3>Add Dishes</h3>

				<label>New Dish </label>
				<input
					type='text'
					className='add-menu-text'
					onChange={(e) => setNewMenuItemName(e.target.value)}
					value={newMenuItemName}
				/>

				<label>Item Price</label>
				<input
					type='text'
					className='add-price-text'
					onChange={(e) => setNewMenuItemPrice(e.target.value)}
					value={newMenuItemPrice}
				/>

				<button className='add-menu-button' onClick={addMenu}>
					Add Menu
				</button>
			</aside>
			<h1 className='orders-heading'> Orders</h1>
			{/*  For adding new Orders*/}

			{/* end of loggedIn */}
			{/* Displaying restaurants' orders from database */}
			<section className='restaurant-orders'>
				<article className='orders'>
					<h1>Order Name</h1>
					<blockquote>
						<h3>FoodItems </h3>
					</blockquote>
				</article>
			</section>
		</main>
	);
}

export default Restaurants;
