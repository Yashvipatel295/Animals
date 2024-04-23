function Fishes(){
    return(
        <>
        
        <h1 style={{"textAlign":"center"}}>Fishes</h1>
        <p className="text-center" style={{"margin":"5px",color:"darkgreen","border":"1px double darkgreen"}}>Fish are vertebrates that live in water and have gills, scales and fins on their body.  
            There are a lot of different fish and many of them look very odd indeed.  
            There are blind fish, fish with noses like elephants and even fish that crawl onto land and hop about!
        </p>
        <div class="container">
        <div class="card" style={{"width":"100%","border":"double","marginBottom":"3px"}}>
          <div class="row no-gutters"> 
              <div class="col-sm-4">
                  <img class="card-img" src="f2.jpg" alt="dog" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                  <div class="card-body">
                      <h5 class="card-title" >Angelfish</h5>
                      <p class="card-text">
                      Pterophyllum is a small genus of freshwater fish from the family Cichlidae know n to most aquarists as angelfish. 
                      All Pterophyllum species originate from the Amazon Basin, Orinoco Basin and various rivers in the Guiana Shield in tropical South America.
                       The three species of Pterophyllum are unusually shaped for cichlids being greatly laterally compressed, with round bodies and elongated triangular dorsal and anal fins.
                       This body shape allows them to hide among roots and plants, often on a vertical surface. Angelfish are ambush predators and prey on small fish and macroinvertebrates.
                        All Pterophyllum species form monogamous pairs. Eggs are generally laid on a submerged log or a flattened leaf.
                      </p>
                      
                  </div>
              </div>
          </div>
        </div>
      
      <div class="card" style={{"width":"100%","border":"double"}}>
          <div class="row no-gutters">
              <div class="col-sm-4">
                <img class="card-img" src="f3.jpg" alt="lion" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                 <div class="card-body">
                  <h5 class="card-title" >Shark</h5>
                 <p class="card-text">
                 Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head,
                  and pectoral fins that are not fused to the head. 
                 Modern sharks are classified within the clade Selachimorpha (or Selachii) and are the sister group to the Batoidea.
                 Sharks range in size from the small dwarf lanternshark (Etmopterus perryi), a deep sea species that is only 17 centimetres (6.7 in) 
                 in length, to the whale shark (Rhincodon typus), the largest fish in the world, which reaches approximately 
                 12 metres (40 ft) in length.[2] They are found in all seas and are common to depths up to 2,000 metres (6,600 ft). 
                  </p>
              </div>
            </div>
          </div> 
    </div>   
  </div>
  </>
    )
}

export { Fishes };