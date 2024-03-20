import { NavLink } from "react-router-dom";

const Navbar = () => {

  return(
    <div>
      <nav className="navbar fixed-top" style={{backgroundColor: "#4c3438"}}>
      <div className="container p-2">

        <div className="col-6 text-white" style={{fontsize:"30px"}}>
          Mathew Hirsch Portfolio Website
        </div>

        <div className="col-1">
          <NavLink to="./" className="text-white" style={{fontsize:"100%"}}>
            About
          </NavLink>
        </div>

        <div className="col-1">
          <NavLink to="./projectsPage" className="text-white" style={{fontsize:"100%"}}>
            Projects
          </NavLink>
        </div>

        <div className="col-1">
          <NavLink to="./Resume.pdf" className="text-white" target="_blank" style={{fontsize:"100%"}}>
            Resume
          </NavLink>
        </div>

        <div className="col-1">
          <a href="mailto:hirsch.m@northeastern.edu" className="text-white" target="_blank">
            <i className="fas fa-envelope">  email  </i>
          </a>
          <a href="https://www.linkedin.com/in/mathew-hirsch/" className="text-white" target="_blank">
          <i className="fab"> linked </i> <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Matamir" className="text-white" target="_blank">
            <i className="fab fa-github"> github</i>
          </a>
        </div>

      </div>
    </nav>
  </div>
  )
}
export default Navbar;