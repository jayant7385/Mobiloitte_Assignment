import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./footer.css";
const Footer=()=>{
    return(
      <div id="footer">
        <div>
        <h6 id="follow">FOLLOW US</h6>
         <div id="footerIcon">
            <FacebookIcon style={{marginLeft:"28px",marginTop:"20px"}}/>
            <InstagramIcon style={{marginLeft:"28px",marginTop:"20px"}}/>
            <BlurCircularIcon style={{marginLeft:"28px",marginTop:"20px"}}/>
            <TwitterIcon style={{marginLeft:"28px",marginTop:"20px"}}/>
         </div>
        </div>

        <div id="footerLink">
          <div id="linkTitle">
          <h6 id="linkTitle1">QUICK LINK</h6>
          <h6 id="linkTitle2">COMMUNITY</h6>
          </div>

         <div> 
          <a id="grplink11" href="#">Explore</a>
          <a id="grplink11" href="#">Rari token</a>
          <a id="grplink11" href="#">Help center</a>
         </div>

         <div>
          <a id="grplink22" href="#">How It Works</a>
          <a id="grplink22" href="#">Discussion</a>
          <a id="grplink22" href="#">Terms and Conditions</a>
          </div>

          <div>
          <a id="grplink33" href="#">Support</a>
          <a id="grplink33" href="#">Votting</a>
          <a id="grplink33" href="#">Privacy Policy</a>
          </div>

          <div>
          <a id="grplink44" href="#">Become a partner</a>
          <a id="grplink44" href="#">Suggest Feature</a>
          </div>
        </div>

        {/* <div id="footerForm">
          <h6 id="stay">STAY IN THE LOOP</h6>
          <div>
          <p>Join our mailing list to stay in the loop with owr newest feature realeases, nft drops and tips and trics for navigating fungy.</p>
          <input placeholder="Your email address"/>
          <button>Sign Up</button>
          <h6>Keep In Touch</h6>
          <input placeholder="Your name"/>
          <input placeholder="E-mail"/>
          <input placeholder="Leave your message!"/> 
          <button>Sign Up</button>
          </div>
        </div> */}
      </div>
    )
  }

export default Footer;