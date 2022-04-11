import React from "react";
import "./Modal.css";
import TextField from '@mui/material/TextField';
      // <div>
      // <div>
      // </div>
        
      // <div>
      //   <h5>Display Name</h5>
      //   <input placeholder="Enter Token Name"/>
      //   <p>Token name can not be change in future</p>
      //   <h5>Symbol</h5>
      //   <input placeholder="Enter Token Symbol"/>
      //   <h5>Description</h5>
      //   <input placeholder="Spread some word about your token collection"/>
      //   <h5>Short url</h5>
      //   <input placeholder="fungy.com/Enter short url"/>
      //   <p>Will be use as public URL</p>
      //   <button>Create Collection</button>
      // </div> 
      // </div>
      
//       )
//   }

// export default Modal;

const Modal=(props)=> {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
             props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Collection</h1>
        </div>
        <div className="body">
 
        <div> <p id="headings">We recommended an image of at least 400x400. Gifs work too.</p> </div>
        <button id="chooseFilebtn">CHOOSE FILE</button> 
        
        <div id="formInputs">
        <p>Display Name <span style={{color:"#888888"}}>(required)</span> </p>
        <TextField id="standard-basic" label="Enter Token Name" variant="standard" />
        <p>Symbol<span style={{color:"#888888"}}>(required)</span></p>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <p>Description<span style={{color:"#888888"}}>(optional)</span></p>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
        </div>
        <div className="footer">
          <button id="newCollection">Create Collection</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;