import ProjectList from "./Projects/ProjectList.js";

const ProjectPage = () => {
    
    return(
        <div>
            <div className="container" style={{paddingTop:"150px"}}>
                {<ProjectList/>}
            </div>
        </div>
    )
}
export default ProjectPage;