import React from "react";
import PaletteIcon from '@mui/icons-material/Palette';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BlockIcon from '@mui/icons-material/Block';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LanguageIcon from '@mui/icons-material/Language';
import SupportIcon from '@mui/icons-material/Support';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./body.css"
import logo from "../component/logo.png"
const Body=()=>{
    return(
      <div>
        
       <h2 className="heading">Create Your Collection</h2>
       <div className="topBox">
       <h5>Upload file</h5>
        <div id="firstBox">
          <div id="firstBoxp">
          <p>JPG,PNG,GIF,WEBP,MP4 or MP4,Max 100mb</p>
          <p>(620x620 recommended)</p>
          <button id="choosebtn">CHOOOSE FILE</button>
          </div>
        </div>
         
   
        <h5 id="preview">Preview</h5>
        <div id="sidebox">
          <p id="thirdBoxp">Upload file to preview your brand new NFT</p>
        </div>
      </div>
     
       <h5 id="Upload" >Upload Cover</h5>
        <div id="secondBox">
          <p id="secondBoxp">JPG,PNG,GIF,WEBP,MP4 or MP4,Max 100mb</p>
          <button id="choosebtn">CHOOOSE FILE</button>
        </div>

        <div id="section2">
        <h5>item Category</h5>  
        <div className="itemIcon1">
         <PaletteIcon style={{marginLeft:"40px"}}/>
         <p>Arts</p>
         <LibraryMusicIcon style={{marginLeft:"40px"}}/>
         <p>Music</p>
         <SportsEsportsIcon style={{marginLeft:"40px"}}/>
         <p>Games</p>
         </div>
         
         <div className="itemIcon2"> 
         <BlockIcon/>
         <p>NSFW</p>
         <EmojiEmotionsOutlinedIcon style={{marginLeft:"25px"}}/>
         <p>Memes</p>
         <ThumbUpIcon style={{marginLeft:"25px"}}/>
         <p>Punk</p>
         </div>

         <div className="itemIcon3">
         <AccountBalanceIcon style={{marginLeft:"40px"}}/>
         <p>DeFi</p>
         <LanguageIcon style={{marginLeft:"35px"}}/>
         <p>Domain</p>
         <SupportIcon style={{marginLeft:"25px"}}/>
         <p>Metaverses</p>
         </div
         >
         <div className="itemIcon4">
         <PhotoCameraIcon style={{marginLeft:"40px"}}/>
         <p>Photography</p>
        </div>
        
         <div id="priceBox">
           <p>Enter price to allow users instantly purchase your NFT</p> 
           <div id="flexBox1">
             <div id="flexBox11"><LocalOfferIcon style={{marginTop:"50px"}}/> <p>Fixed Price</p> </div>
             <div id="flexBox12"><TimelapseIcon style={{marginTop:"50px"}}/> <p>Timed Auction</p> </div>
           </div>
         </div>

        <h5>Price</h5>
        <div id="price">
        <TextField fullWidth="true" id="standard-basic" label="ETH" variant="standard" />
        <div id="priceDetail">
          <p>Service Fee <span style={{color:"#0992D5"}}>2.5%</span></p>
          <p>You will receive <span style={{color:"black"}}>ETH</span> <span style={{color:"#0992D5"}}>$106.58</span></p>
        </div> 
        </div>
      
        <div id="unlock">
          <h5>Unlock Once Purchased</h5>
          <p>Content will unlocked after successful transaction</p>
          <TextField fullWidth="true" id="standard-basic" label="Digital key,code to redeem or link to file..." variant="standard" />
          
        </div>

        <h5>Choose Collection</h5>    
        <div id="flexbox2">
            <div id="flexbox21">
              <AddCircleIcon style={{marginTop:"45px"}}/>
            <h6>Create</h6> 
            </div>

            <div id="flexbox22">
            <img id="logo2" src={logo} alt="logo"/>
            <h6>Fungy</h6> 
            </div>
        </div>
        
        <div id="textfield1">
          <h5>Title</h5>
          <TextField fullWidth="true" id="standard-basic" label="e.g. redeemable T-shirt with logo" variant="standard" />
          
          <h5>Description</h5>
          <TextField fullWidth="true" id="standard-basic" label="e.g. after purchasing you will be get real T-shirt" variant="standard" />
          <p>With preaserved line-breaks</p>
          <h5>Royalties</h5>
          <TextField fullWidth="true" id="standard-basic" label="e.g. 10%" variant="standard" />
          <p>Suggested: 0%,10%,20%,30% </p>
        </div>

        <div id="bottomBody">
         <button id="hidebtn">HIDE ADVANCED SETTINGS</button>
         <h5>Properties</h5>
         <TextField  id="standard-basic" label="e.g Size" variant="standard" />
         <TextField style={{marginLeft:"12px"}} id="standard-basic" label="e.g. M" variant="standard" />
         
         <div id="lastfiled">
         <h5>Alternative text for NFT</h5>
         <TextField fullWidth="true" id="standard-basic" label="Image description in detail" variant="standard"/>
         <p>Text that will be used in voiceover for people with disabilities</p>
        </div>
         <button id="createItem">CREATE ITEM</button>
        </div> 
        </div> 
      </div>
    )
  }
 
export default Body;