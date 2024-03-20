import ProjectList from "./Projects/ProjectList.js";

const ProjectPage = () => {
    
    return(
        <div>
            <div className="container" style={{paddingTop:"150px"}}></div>
            <div>
                {<ProjectList/>}
            </div>
        </div>
    )
}
export default ProjectPage;