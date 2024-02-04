import ProjectList from "./Projects/index.js";

(function ($) {
  $('#navbar').append(`
          <nav class="navbar fixed-top" style="background-color: #4c3438">
    <div class="container p-2">

      <div class="col-6 text-white" style="font-size:30px">
        Mathew Hirsch Portfolio Website
      </div>
      
<!--
      <div hidden class="col-1">
        <a href="./index.html" class="text-white" style="font-size:30px">
          Home
        </a>
      </div>
-->


      <div class="col-1">
        <a href="./about.html" class="text-white" style="font-size:30px">
          About
        </a>
      </div>

<!-- 
      <div class="col-1">
        <a href="./demos.html" class="text-white" style="font-size:30px">
          Demos
        </a>
      </div>
-->

      <div class="col-1">
        <a href="./projectsPage.html" class="text-white" style="font-size:30px">
          Projects
        </a>
      </div>


      <div class="col-1">
        <a href="./Resume.pdf" class="text-white" target="_blank" style="font-size:30px">
          Resume
        </a>
      </div>


      <div class="col-1">
        <a href="mailto:hirsch.m@northeastern.edu" class="text-white" target="_blank">
          <i class="fas fa-envelope">  email  </i>
        </a>
        <a href="https://www.linkedin.com/in/mathew-hirsch/" class="text-white" target="_blank">
        <i class="fab"> linked </i> <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Matamir" class="text-white" target="_blank">
          <i class="fab fa-github"> github</i>
        </a>
      </div>

    </div>
  </nav>

    `);
})($);
