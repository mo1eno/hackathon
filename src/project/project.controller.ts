// role.controller.ts
import { Controller, Get } from '@nestjs/common';
import {ProjectMemberService, ProjectService, RoleService, SkillsService, StudentService} from './project.service';
import {ProjectMember, Role, Skills, Student,Project} from './project.model';
import ts from "typescript";

@Controller('roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Get()
    findAll(): Promise<Role[]> {
        return this.roleService.findAll();
    }
}
@Controller('skills')
export class SkillsController {
    constructor(private readonly roleService: SkillsService) {}

    @Get()
    findAll(): Promise<Skills[]> {
        return this.roleService.findAll();
    }
}
@Controller('students')
export class StudentController {
    constructor(private readonly roleService: StudentService) {}

    @Get()
    findAll(): Promise<Student[]> {
        return this.roleService.findAll();
    }
}
@Controller('projects')
export class ProjectController {
    constructor(private readonly roleService: ProjectService) {}

    @Get()
    findAll(): Promise<Project[]> {
        return this.roleService.findAll();
    }
}
@Controller('projectmembers')
export class ProjectMemberController {
    constructor(private readonly roleService: ProjectMemberService) {}

    @Get()
    findAll(): Promise<ProjectMember[]> {
        return this.roleService.findAll();
    }
}