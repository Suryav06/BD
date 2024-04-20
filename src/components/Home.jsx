import React from 'react';
import "../style/home.css";
import ved from "../assets/heart.mp4";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()

  const gotToNewPage=()=>{
    navigate("/cutiee");
  }
  return (
    <>
   <video autoPlay muted loop src={ved}></video>
     <div className='b1'> 
     <h1>Happy Birthday Miss Bunns !!!</h1>
     <p style={{paddingTop:"20px",}}> My cutie Little baby piee its your Bithdayyyyy bwhahahha!! <br /> <span>I lovess youu so much.</span></p>
     </div>
   
    <button onClick={()=>gotToNewPage()} className="button-1" role="button">Click here!! Cutie piee!</button>
   </>
  );
};

export default Home;
