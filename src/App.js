import './App.css';
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import WorkoutPage from './components/Youtube/workoutPage'; 
import Fitness from './components/Fitness'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Fitness" element={<Fitness />}/>
          <Route path='/Workouts' element = {<WorkoutPage />}/>
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
