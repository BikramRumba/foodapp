import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return(
       <div className="footer">
        <div className="social-media">
            <p>&copy; 2022 Designed by Bikram Rumba</p>
             <p>Feel Free to Connect</p>
             <Link to={{pathname: "https://github.com/BikramRumba"}} target="_blank" >
             <GitHubIcon/>
             </Link>
            <Link to={{pathname: "https://www.linkedin.com/in/bikram-rumba/"}} target="_blank" >
            <LinkedInIcon/>
            </Link>
            <Link to={{pathname: "https://twitter.com/rumbikram1231"}} target="_blank" >
            <TwitterIcon/>
            </Link>
           
        </div>

    </div>
    );
}

export default Footer;
