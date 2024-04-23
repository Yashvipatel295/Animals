function Arthropods(){
    return(
        <>
        <h1 style={{"textAlign":"center"}}>Arthropods</h1>
        <p className="text-center" style={{"margin":"5px",color:"darkgreen","border":"1px double darkgreen"}}>Any animals that have more than four, jointed legs are arthropods. 
         Insects, spiders and crustaceans all belong to this class of animals.Arthropods are invertebrates in the phylum Arthropoda.
         Arthropods use combinations of compound eyes and pigment-pit ocelli for vision.
        </p>
        <div class="container">
        <div class="card" style={{"width":"100%","border":"double","marginBottom":"3px"}}>
          <div class="row no-gutters"> 
              <div class="col-sm-4">
                  <img class="card-img" src="a1.jpg" alt="dog" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                  <div class="card-body">
                      <h5 class="card-title" >Butterflies</h5>
                      <p class="card-text">
                      Butterflies are winged insects from the lepidopteran suborder Rhopalocera, characterized by large, often brightly coloured wings 
                      that often fold together when at rest, and a conspicuous, fluttering flight. The group comprises the superfamilies Hedyloidea and Papilionoidea. 
                      The oldest butterfly fossils have been dated to the Paleocene, about 56 million years ago, though they may have originated earlier.
                      Butterflies have a four-stage life cycle, and like other holometabolous insects they undergo complete metamorphosis. Winged adults 
                      lay eggs on the food plant on which their larvae, known as caterpillars, will feed. The caterpillars grow, sometimes very rapidly,
                      and when fully developed, pupate in a chrysalis. 
                      </p>
                      
                  </div>
              </div>
          </div>
        </div>
      
      <div class="card" style={{"width":"100%","border":"double"}}>
          <div class="row no-gutters">
              <div class="col-sm-4">
                <img class="card-img" src="a2.jpg" alt="lion" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                 <div class="card-body">
                  <h5 class="card-title" >Ants</h5>
                 <p class="card-text">
                 Ants are eusocial insects of the family Formicidae and, along with the related wasps and bees, belong to the order Hymenoptera.
                Ants evolved from vespoid wasp ancestors in the Cretaceous period. More than 13,800 of an estimated total of 22,000 species have been classified.
                They are easily identified by their geniculate (elbowed) antennae and the distinctive node-like structure that forms their slender waists.
                Ants form colonies that range in size from a few dozen predatory individuals living in small natural cavities to highly organised colonies
                 that may occupy large territories and consist of millions of individuals. Larger colonies consist of various castes of sterile,
                 wingless females, most of which are workers (ergates), as well as soldiers (dinergates) and other specialised groups.
                  </p>
              </div>
            </div>
          </div> 
    </div>   
  </div>

  </>
    )
}
export { Arthropods };