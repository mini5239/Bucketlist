// src/components/ProjectList.js
import React from 'react';

class ProjectList extends React.Component {
    createProjectListItem(project) {
        const { project_byline, project_client } = project.acf;
        return (
            <li key={`project-${project.id}`}>
                <a href='#'>
                    <h3 className="projectlist--client">{project_client}</h3>
                    <h4 className="projectlist--byline">{project_byline}</h4>
                </a>
            </li>
        );
    }

    render() {
        return (
            <div className="project-list">
                <ul className="menu vertical">
                    {this.props.projects.map((project) => this.createProjectListItem(project))}
                </ul>
            </div>
        );
    }
}

export default ProjectList;
