function Reptiles(){
    return(
        <>
        <h1 style={{"textAlign":"center"}}>Reptiles</h1>
        <p className="text-center" style={{"margin":"5px",color:"darkgreen","border":"1px double darkgreen"}}>Reptiles are a class of animal with scaly skin.  They are cold blooded and are born on land. 
         Snakes, lizards, crocodiles, alligators and turtles all belong to the reptile class.The study of the traditional reptile orders, 
         customarily in combination with the study of modern amphibians, is called herpetology. </p>
        <div class="container">
        <div class="card" style={{"width":"100%","border":"double","marginBottom":"3px"}}>
          <div class="row no-gutters"> 
              <div class="col-sm-4">
                  <img class="card-img" src="r2.jpg" alt="dog" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                  <div class="card-body">
                      <h5 class="card-title" >Snake</h5>
                      <p class="card-text">
                      Snake, (suborder Serpentes), any of more than 3,400 species of reptiles distinguished by their limbless condition and greatly 
                      elongated body and tail. Classified with lizards in the order Squamata, snakes represent a lizard that,
                       over the course of evolution, has undergone structural reduction, simplification, and loss as well as specialization.
                       Snakes are thought to have evolved from terrestrial lizards as early as the Middle Jurassic Epoch (174.1 million to 163.5 million years ago). 
                       The oldest known fossil snake, Eophis underwoodi, was a small snake that lived in southern England about 167 million years ago.
                      </p>
                      
                  </div>
              </div>
          </div>
        </div>
      
      <div class="card" style={{"width":"100%","border":"double"}}>
          <div class="row no-gutters">
              <div class="col-sm-4">
                <img class="card-img" src="r3.jpg" alt="lion" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                 <div class="card-body">
                  <h5 class="card-title" >Crocodiles</h5>
                 <p class="card-text">
                 Crocodiles (family Crocodylidae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia,
                the Americas and Australia. The term crocodile is sometimes used even more loosely to include all extant members of the order Crocodilia,
                 which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae) among other extinct taxa.
                 he gharial, with its narrow snout, is easier to distinguish, while morphological differences are more difficult to spot in crocodiles
                  and alligators. The most obvious external differences are visible in the head,
                  with crocodiles having narrower and longer heads, with a more V-shaped than a U-shaped snout compared to alligators and caimans.
                  </p>
              </div>
            </div>
          </div> 
    </div>   
  </div>
  </>
    )
}
export { Reptiles };