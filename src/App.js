import './App.css';
import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import WorkoutPage from './components/Youtube/workoutPage'; 
import Fitness from './components/Fitness'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/styles/Home.css';
import Footer from './components/Footer/footer';
import { height } from '@mui/system';
function App() {
  return (
    <div>

    <Router>
      <div style={{backgroundColor:"#142738", minHeight:'100vh'}} >
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Fitness" element={<Fitness />}/>
          <Route path='/Workouts' element = {<WorkoutPage />}/>
        </Routes>
      </div>
    </Router>
    <Footer></Footer>
    </div>
  );
}

export default App;
