import projects from "./Project.js";
import ProjectListItem from "./ProjectsListItem.js";

const ProjectList = () => {
  return(`
      ${projects.map(project => {
        return(ProjectListItem(project));
  }).join('')}
  `);
}
export default ProjectList;