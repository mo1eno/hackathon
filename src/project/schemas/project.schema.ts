import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date } from "mongoose";

export type ProjectDocument = Project & Document;

@Schema()
export class Project{
    @Prop()
    project_id: number;

    @Prop()
    p_name: string;

    @Prop()
    description: string;

    @Prop()
    skills: string;

    @Prop()
    status: string;

    @Prop()
    role_id: number;

    @Prop()
    skills_id: number;

    @Prop()
    startdate: Date;

    @Prop()
    enddate: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project); 