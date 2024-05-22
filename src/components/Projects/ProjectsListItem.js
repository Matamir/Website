const ProjectListItem = (project) => {

  // This conditional make it so the cant load image icon doesn't come up if no image is provided.
  var imageHTML = <></>

  if(project.projectImage !== ""){
    imageHTML = 
          <div className="column">
            <img src={project.projectImage} className="img-fluid" alt={project.projectImageAltText} style={{width:"384px"}}/>
          </div>
  }

  return(
      <div className="card my-5" style={{borderRadius: "25px", padding: "25px", backgroundColor: "#5BCEFA"}}>
        <div className="row">
          {imageHTML}
        </div>
        <div className="row pt-1">
          <div className="column"><p className="font-weight-bold pr-3">{project.projectName}</p> </div>
          <div className="column"><p className="font-italic pr-5">{project.projectLanguages}</p></div>
          <div className="column"><p className="font-weight-light pl-5">{project.projectTimeline}</p></div>

            
            
           
            <div dangerouslySetInnerHTML={{__html: project.projectDescription}}/>
           <br />
        </div>
      </div>
      );
}
export default ProjectListItem;