const ProjectListItem = (project) => {
  return(`
        <div class="container">
          <div class="row">
          
            <img src=${project.projectImage}>
            
            <p class="font-weight-bold">${project.projectName}</p>  
            <p class="font-italic">${project.projectLanguages}</p>  
           
            <div>${project.projectDescription}</div>
          </div>  
        </div>
      `);
}
export default ProjectListItem;