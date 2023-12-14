import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProjectmemberDocument = Projectmember & Document;

@Schema()
export class Projectmember{
    @Prop()
    member_id: number;

    @Prop()
    project_id: number;

    @Prop()
    stud_id: number;

    @Prop()
    joindate: Date;

    @Prop()
    role_id: number;
}

export const ProjectmemberSchema = SchemaFactory.createForClass(Projectmember); 