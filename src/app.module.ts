import {Module} from "@nestjs/common";
import * as path from 'path'
import { ProjectController } from "./project/project.controller";
import { NEXT_PROJECT_ROOT } from "next/dist/build/webpack-config";
import { ProjectService } from "./project/project.service";
import { ProjectModule } from "./project/project.module";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'),
        ProjectModule
    ]
})
export class AppModule {}