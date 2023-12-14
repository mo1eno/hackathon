import { Module } from "@nestjs/common";
import { Mongoose } from "mongoose";
import { ProjectSchema } from "./schemas/project.schema";

@Module({
    imports: [
        Mongoose.forFeature({name: Project.name, schema: ProjectSchema})
    ]
})
export class ProjectModule {}