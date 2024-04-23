function Birds(){
    return(
        <>
        <h1 style={{"textAlign":"center"}}>Birds</h1>
        <p className="text-center" style={{"margin":"5px",color:"darkgreen","border":"1px double darkgreen"}}>Birds are animals that have feathers and that are born out of hard-shelled eggs.  
        Some people think that what makes an animal a bird is its wings.  Bats have wings.  Flies have wings.
        Birds arose as warm-blooded, arboreal, flying creatures with forelimbs adapted for flight and hind limbs for perching. 
        </p>
        <div class="container">
        <div class="card" style={{"width":"100%","border":"double","marginBottom":"3px"}}>
          <div class="row no-gutters"> 
              <div class="col-sm-4">
                  <img class="card-img" src="b2.jpg" alt="dog" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                  <div class="card-body">
                      <h5 class="card-title" >Indian peafowl</h5>
                      <p class="card-text">
                      The Indian peafowl (Pavo cristatus), also known as the common peafowl, and blue peafowl,
                       is a peafowl species native to the Indian subcontinent. It has been introduced to many other countries.
                        Male peafowl are referred to as peacocks, and female peafowl are referred to as peahens,
                         although both sexes are often referred to colloquially as a "peacock".Indian peafowl display a marked form of sexual dimorphism. 
                         The peacock is brightly coloured, with a predominantly blue fan-like crest of spatula-tipped wire-like feathers and
                          is best known for the long train made up of elongated upper-tail covert feathers which bear colourful eyespots.
                          The Indian peafowl lives mainly on the ground in open forest or on land under cultivation where they forage for berries,
                           grains but also prey on snakes, lizards, and small rodents.
                      </p>
                      
                  </div>
              </div>
          </div>
        </div>
      <div class="card" style={{"width":"100%","border":"double"}}>
          <div class="row no-gutters">
              <div class="col-sm-4">
                <img class="card-img" src="b3.jpg" alt="lion" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                 <div class="card-body">
                  <h5 class="card-title" >European goldfinch</h5>
                 <p class="card-text">
                 The European goldfinch or simply the goldfinch (Carduelis carduelis) is a small passerine bird in the finch family that is native to 
                 Europe, North Africa and western and central Asia.It has been introduced to other areas, including Australia, New Zealand and Uruguay.
                 The European goldfinch was one of the birds described and illustrated by Swiss naturalist Conrad Gessner in his Historiae animalium of 1555.
                 The breeding male has a red face with black markings around the eyes, and a black-and-white head. 
                 The back and flanks are buff or chestnut brown. The black wings have a broad yellow bar. The tail is black and the rump is white. 
                 Males and females are very similar, but females have a slightly smaller red area on the face.
                 The goldfinch is often depicted in Italian Renaissance paintings of the Madonna and Child.
                  </p>
              </div>
            </div>
          </div> 
    </div>   
  </div>
  </>
    )
}
export { Birds };