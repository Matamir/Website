import projects from "./Project.js";
import ProjectItem from "./ProjectsListItem.js";

const ProjectList = () => {
  return(`
    <ul>
      ${projects.map(project => {
        return(ProjectItem(project));
  }).join('')}
    </ul>
  `);
}
export default ProjectList;