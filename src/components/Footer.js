import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';


function Footer() {
  return(
       <div className="footer">
        <div className="social-media">
            <p>&copy; 2022 Designed by Bikram Rumba</p>
             <p>Follow me on:</p>
            <GitHubIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
        </div>

    </div>
    );
}

export default Footer;
