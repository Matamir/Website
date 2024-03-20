import projects from "./Project.js";
import ProjectListItem from "./ProjectsListItem.js";

const ProjectList = () => {
  return(
    <div>
      {projects.map(project => {
        return(ProjectListItem(project));
      })}
    </div>
  );
}
export default ProjectList;