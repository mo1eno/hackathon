import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type StudentDocument = Student & Document;

@Schema()
export class Student{
    @Prop()
    stud_id: number;

    @Prop()
    fname: string;

    @Prop()
    sname: string;

    @Prop()
    email: string;

    @Prop()
    date_reg: Date;

    @Prop()
    login: string;

    @Prop()
    pass: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student); 