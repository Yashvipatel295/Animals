import './App.css';
import Sidebar from './Sidebar';

function App() {

  
  return (
    <>
    <div className="app">
    <Sidebar cat1='Mammals' cat2='Fish' cat3='Birds' cat4='Reptiles' cat5='Arthropods' categories={'categories'}/> 
    {/* <Router>
    <Sidebar cat1='Mammals' cat2='Fish' cat3='Birds' cat4='Reptiles' cat5='Arthropods' categories={'categories'}/> 
      <div className="container p-4">
        <Switch>
          
          <Route path="/Home" component={Home} />
        </Switch>
      </div>
    </Router> */}
  
    </div>
    
  </>
  );
}
export default App;
