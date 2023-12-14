import { Controller, Get } from "@nestjs/common";

@Controller('/projects')
export class ProjectController{
    create() {
    }

    @Get()
    getAll() {
        return 'WORK'
    }
    getOne() {
        
    }
    delete() {
        
    }
}