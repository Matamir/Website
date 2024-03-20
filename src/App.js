import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Navbar from './components/navbar';
import About from './components/about';
import ProjectPage from './components/projectpage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route path="/projectsPage" element={<ProjectPage/>}/>
        <Route path="/demos"/>
      </Routes>
    </Router>
  );
}

export default App;
