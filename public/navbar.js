import ProjectList from "./Projects/index.js";

let style = `style="font-size:100%;"`;
(function ($) {
  $('#navbar').append(`
          <nav class="navbar fixed-top" style="background-color: #4c3438">
    <div class="container p-2">

      <div class="col-6 text-white" style="font-size:30px">
        Mathew Hirsch Portfolio Website
      </div>

      <div class="col-1">
        <a href="./about.html" class="text-white" ${style}>
          About
        </a>
      </div>

      <div class="col-1">
        <a href="./projectsPage.html" class="text-white" ${style}>
          Projects
        </a>
      </div>

      <div class="col-1">
        <a href="./Resume.pdf" class="text-white" target="_blank" ${style}>
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
