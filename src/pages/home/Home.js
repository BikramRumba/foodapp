import image from '../../assets/food.png'
import '../home/Home.css'

function Home() {
  return (
    <div className="home"  style={{backgroundImage: `url(${image})`}}>
      <div className="search">
      <form >
       <label htmlFor="searchRestaurant">
        Search Restaurant
       </label>
       <input type="text" 
          id='searchRestaurant'
          placeholder='Search by name'
         />
         <button>Search</button>
     </form>
  </div>
  </div>
  );
}

export default Home;
