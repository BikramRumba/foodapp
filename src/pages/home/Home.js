import { useContext, useState } from 'react';
import image from '../../assets/food.avif';
import '../home/Home.css';
import axiosInstance from '../../axiosInstance';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

function Home() {
	const [name, setName] = useState('');
	const [restaurant, setRestaurant] = useState([]);
	const history = useHistory();

	const searchRestaurant = async (e) => {
		e.preventDefault();
		// const response = await axiosInstance.get('/search');
		// setRestaurant(response.data);

		history.push(`/search?name=${name}`);
	};
	return (
		<div className='home' style={{ backgroundImage: `url(${image})` }}>
			<div></div>
			<div className='search'>
				<form>
					<label>Search Restaurant</label>
					<input
						type='text'
						placeholder='Search by name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button onClick={searchRestaurant}>Search</button>
				</form>
				{restaurant.map((value, key) => (
					<div key={key} className='restaurant-search-result'>
						{value.name}
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
