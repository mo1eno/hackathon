import { IProject } from "@/types/project";
import React from "react";
import Card from "./Card";

interface ProjectListProps {
    projects: IProject[]
}

const ProjectList: React.FC<ProjectListProps> = ({projects}) => {
    return (
        <div>
            {
            projects.map(project => 
                <Card
                key={project.project_id}
                project={project}
                />
            )}
        </div>
    );
};

export default ProjectList;