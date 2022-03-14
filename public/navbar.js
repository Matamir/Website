import ProjectList from "./Projects/index.js";

(function ($) {
  $('#navbar').append(`
          <nav class="navbar fixed-top bg-info">
    <div class="container p-2">

      <div class="col-3 text-white">
        Mathew Hirsch Portfolio Website
      </div>
      
      
      <div class="col-1">
        <a href="./index.html" class="text-white">
          Home
        </a>
      </div>
      
      
      <div class="col-1">
        <a href="./about.html" class="text-white">
          About
        </a>
      </div>
      
      <div class="col-1">
        <a href="./projectsPage.html" class="text-white">
          Projects
        </a>
      </div>


      <div class="col-1">
        <a href="./Resume.pdf" class="text-white" target="_blank">
          Resume
        </a>
      </div>


      <div class="col-1">
        <a href="mailto:hirsch.m@northeastern.edu" class="text-white" target="_blank">
          <i class="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/mathew-hirsch/" class="text-white" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Matamir" class="text-white" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>

    </div>
  </nav>

    `);
})($);
