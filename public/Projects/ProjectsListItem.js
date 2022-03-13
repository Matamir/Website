const ProjectListItem = (project) => {
  return(`
      <li>
        <img src=${project.projectImage}>
        ${project.projectName}
        <div>${project.projectDescription}</div>
      </li>
      `);
}
export default ProjectListItem;