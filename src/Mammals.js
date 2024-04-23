function Mammals(){
    return(
        <>
        <h1 style={{"textAlign":"center"}}>Mammals</h1>
        <p className="text-center" style={{"margin":"5px",color:"darkgreen","border":"1px double darkgreen"}}>People are mammals.  So are dogs, cats, horses, duckbill platypuses, kangaroos, dolphins and whales.  
        What do all these animals have in common, you ask?  The answer is – Milk! 
         If an animal drinks milk when it is a baby and has hair on its body, it belongs to the mammal class.
        </p>
        <div class="container">
        <div class="card" style={{"width":"100%","border":"double","marginBottom":"3px"}}>
          <div class="row no-gutters"> 
              <div class="col-sm-4">
                  <img class="card-img" src="m1.jpg" alt="dog" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                  <div class="card-body">
                      <h5 class="card-title" >Dog</h5>
                      <p class="card-text">
                      Dog, domestic mammal of the family Canidae order Carnivora.
                       It is a subspecies of the gray wolf Canis lupus and is related to foxes and jackals. 
                       The dog is one of the two most ubiquitous and most popular domestic animals in the world 
                       the cat is the other. For more than 12,000 years it has lived with humans as a hunting 
                       companion, protector, object of scorn or adoration, and friend.
                       The dog is a classic example of a domestic animal that likely travelled a commensal pathway into domestication.
                       Dog breeds vary widely in shape, size, and color. They perform many roles for humans, such as hunting, herding, pulling loads, 
                       protection, assisting police and the military, companionship, therapy, and aiding disabled people. Over the millennia,
                        dogs became uniquely adapted to human behavior, and the human–canine bond has been a topic of frequent study.
                      </p>
                      
                  </div>
              </div>
          </div>
        </div>
      
      <div class="card" style={{"width":"100%","border":"double"}}>
          <div class="row no-gutters">
              <div class="col-sm-4">
                <img class="card-img" src="m2.jpg" alt="lion" style={{"width":"100%","height":"100%"}}/>
              </div>
              <div class="col-sm-8">
                 <div class="card-body">
                  <h5 class="card-title" >Tiger</h5>
                 <p class="card-text">
                 The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera.
                  It is most recognisable for its black stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, 
                  such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat
                   to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their
                  mother for about two years and then become independent, leaving their mother's territories to establish their own.
                  The tiger is among the most recognisable and popular of the world's charismatic megafauna.
                  The tiger is the national animal of India, Bangladesh, Malaysia and South Korea.
                  </p>
              </div>
            </div>
          </div> 
    </div>   
  </div>
    </>   
    )
}
export { Mammals };