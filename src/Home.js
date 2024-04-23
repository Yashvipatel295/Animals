import React from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
import { Mammals } from "./Mammals";

function Home() {
  return(
  <>
    <div className="container">
  <div className="row no-gutters">
    <div style={{ display: "inline-block",textAlign:"center" }} className="col-sm-6">
       <div style={{ display: 'block', width:"550", padding:"30" }}> 
      <h2>ANIMAL INFO</h2> 
      <Carousel> 
        <Carousel.Item interval={1500}> 
          <img className="d-block w-100"src="slider1.jpg" alt="Image One" style={{height:"300px"}}/> 
          <Carousel.Caption> 
            <h2>Mammals</h2>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img className="d-block w-100" src="slider2.jpg" alt="Image Two" style={{height:"300px"}} /> 
          <Carousel.Caption>        
           <h2>Fishes</h2>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img className="d-block w-100" src="slider3.jpg" alt="Image Two" style={{height:"300px"}} /> 
          <Carousel.Caption> 
            <h2>Birds</h2>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img className="d-block w-100" src="slider4.jpg" alt="Image Two" style={{height:"300px"}} /> 
          <Carousel.Caption> 
            <h2>Reptiles</h2>
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img className="d-block w-100" src="slider5.jpg" alt="Image Two" style={{height:"300px"}} /> 
          <Carousel.Caption> 
            <h2>Arthropods</h2>
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div>
    </div>
  <div className="col-sm-6"  style={{"border":"1px double darkgreen","marginTop":"25px",borderRadius:"2%"}} >
       <h3>we love animal !!</h3>
       <p><span>Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia.
         With few exceptions, animals consume organic material, breathe oxygen, have myocytes and are able to move,
          can reproduce sexually, and grow from a hollow sphere of cells, the blastula, 
        during embryonic development. Animals form a clade, meaning they arose from a single common ancestor</span></p>      
        <p>Over 1.5 million living animal species have been described—of which around 1.05 million are insects, over 85,000 are molluscs,
           and around 65,000 are vertebrates. It has been estimated there are as many as 7.77 million animal species on Earth.
           Animal body lengths range from 8.5 μm (0.00033 in) to 33.6 m (110 ft). </p>
      
  </div>
  </div>
  </div>
</>
  );
};
export {Home};
