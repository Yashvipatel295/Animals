//import React from 'react';
import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file for styling
//import categories from './categories.json';
import { Mammals } from './Mammals';
import { Fishes } from './Fishes';
import { Birds } from './Birds';
import { Reptiles } from './Reptiles';
import { Arthropods } from './Arthropods';
import { Home } from './Home';
//import { useNavigate } from "react-router-dom";

function Sidebar(props) 
{
  //const navigate = useNavigate();
  const [buttonClicked0, setButtonClicked0] = useState(false);
  const [buttonClicked1, setButtonClicked1] = useState(false);
  const [buttonClicked2, setButtonClicked2] = useState(false);
  const [buttonClicked3, setButtonClicked3] = useState(false);
  const [buttonClicked4, setButtonClicked4] = useState(false);
  const [buttonClicked5, setButtonClicked5] = useState(false);
  
  function Homes()
  {
    setButtonClicked0(true);
    setButtonClicked1(false);
    setButtonClicked2(false);
    setButtonClicked3(false);
    setButtonClicked4(false);
    setButtonClicked5(false);
  }
  function Mammal()
  {
    setButtonClicked0(false);
    setButtonClicked1(true);
    setButtonClicked2(false);
    setButtonClicked3(false);
    setButtonClicked4(false);
    setButtonClicked5(false);
  }
  function Fish()
  {
    setButtonClicked0(false);
    setButtonClicked1(false);
    setButtonClicked2(true);
    setButtonClicked3(false);
    setButtonClicked4(false);
    setButtonClicked5(false);
    
  }
  function Bird()
  {
    setButtonClicked0(false);
    setButtonClicked1(false);
    setButtonClicked2(false);
    setButtonClicked3(true);
    setButtonClicked4(false);
    setButtonClicked5(false);
  }
  function Reptile()
  {
    setButtonClicked0(false);
    setButtonClicked1(false);
    setButtonClicked2(false);
    setButtonClicked3(false);
    setButtonClicked4(true);
    setButtonClicked5(false);
  }
  function Arthropod()
  {
    setButtonClicked0(false);
    setButtonClicked1(false);
    setButtonClicked2(false);
    setButtonClicked3(false);
    setButtonClicked4(false);
    setButtonClicked5(true);
  }


  return (
<>
    {/* <div class="navi">
     
    </div> */}
    <nav class="navbar navbar-expand-md" style={{backgroundColor:"lightgray"}}>
  <div class="container-fluid" style={{color:"darkgreen"}}>
    <a class="navbar-brand d-md-none" href="#" >
      <img src="logo.jpg" alt="" style={{borderRadius:"50%"}}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" style={{"marginBottom":"1px"}} >
      <ul class="navbar-nav mx-auto" style={{"margin":"2px"}}>
      <li class="nav-item" style={{"margin":"2px"}}>
      <button className='mybutton' onClick={Homes}>Home</button>
        </li>
        <li class="nav-item" style={{"margin":"2px"}}>
        <button className='mybutton' onClick={Mammal}>{props.cat1}</button>
        </li>
        <li class="nav-item" style={{"margin":"2px"}}>
        <button className='mybutton' onClick={Fish}>{props.cat2}</button>
        </li>
        <a class="navbar-brand d-none d-md-block" href="#" >
          <img src="logo.jpg" alt="" style={{borderRadius:"50%"}}/>
        </a>
        <li class="nav-item" style={{"margin":"2px"}}> 
        <button className='mybutton' onClick={Bird}>{props.cat3}</button>
        </li>
        <li class="nav-item" style={{"margin":"2px"}}>
        <button className='mybutton' onClick={Reptile}>{props.cat4}</button>
        </li>
        <li class="nav-item" style={{"margin":"2px"}}>
        <button className='mybutton' onClick={Arthropod}>{props.cat5}</button>
        </li>
      </ul>
    </div>
  </div>
</nav>


   <div class="content col-12">
      {buttonClicked0 ?(<Home/>):(<img src="image_path_before_click.jpg" alt=""/> )}
   
      {buttonClicked1 ?(<Mammals/>):(<img src="image_path_before_click.jpg" alt=""/> )}

      {buttonClicked2 ?(<Fishes/>):(<img src="image_path_before_click.jpg" alt="" />)}

      {buttonClicked3 ?(<Birds/>) : (<img src="image_path_before_click.jpg" alt="" />)}

      {buttonClicked4 ? (<Reptiles/>) : (<img src="image_path_before_click.jpg" alt="" />)}
      {buttonClicked5 ? (<Arthropods/>) : (<img src="image_path_before_click.jpg" alt="" />)}
      
    </div>

  </>
  
  )
};
export default Sidebar;