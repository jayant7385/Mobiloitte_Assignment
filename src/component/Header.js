import React, { useState } from "react";
import logo from "../component/logo.png"
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Modal from "../component/Modal";
import "./header.css";
const Header=()=>{

  const [modalOpen, setModalOpen] = useState(false);
    return(
      <>
      <div className="header">
       <img id="logo" src={logo} alt="logo"/>
       <h1 id="title">Fungy</h1>
       <input id="search" placeholder="search items,collections,creators"/>
       
          <div className="link-top">
              <a className="link-1" href="#">Explore</a>
              <a className="link-1" href="#">My Items</a>
              <a className="link-1" href="#">Following</a>
              <a className="link-1" href="#">Activity</a>
              <a className="link-1" href="#">How Its Work</a>
              <a className="link-1" href="#">Community</a>
          </div>
            <CircleNotificationsOutlinedIcon style={{marginTop:22,marginLeft:40,color:"#737574"}}/>
        
      {/* <div id="dropdown">
         <button id="tokenBtn">0 Token</button>  
         <div id="dropdown-content">
               <a onClick={() => {setModalOpen(true);}} href="#">Create a collection</a>
               <a href="#">My profile</a>
               <a href="#">My favorites</a>
               <a href="#">Log out</a>
         </div>
     </div> */}

         <div className="dropdown">
           <button id="tokenBtn">0 Token</button>
           <div className="dropdown-content">
                <a onClick={() => {setModalOpen(true);}} href="#">Create a collection</a>
                <a href="#">My profile</a>
                <a href="#">My favorites</a>
                <a href="#">Log out</a>
           </div>
         </div>


          <PersonPinIcon style={{marginTop:22,marginLeft:20,color:"#737574"}}/>  
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <hr/>


      </>
    )
  }

export default Header;