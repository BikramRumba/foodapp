import image from '../assets/food.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home"  style={{backgroundImage: `url(${image})`}}>

  <div className="headerContainer">
      Welcome
  </div>
  </div>
  );
}

export default Home;
