import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Navbar from './components/navbar';
import About from './components/about';
import ProjectPage from './components/projectpage';
import PageNotFound from './components/404';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<About/>} />
        <Route path="/projectsPage" element={<ProjectPage/>}/>
        <Route path="/demos"/>
        <Route path="/404" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
