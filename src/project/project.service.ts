// src/services/project.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Project, ProjectMember, Role, Skills, Student} from '../project/project.model';



@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) {}

    async findAll(): Promise<Role[]> {
        return this.roleRepository.find();
    }
}

@Injectable()
export class SkillsService {
    constructor(
        @InjectRepository(Skills)
        private readonly roleRepository: Repository<Skills>,
    ) {}

    async findAll(): Promise<Skills[]> {
        return this.roleRepository.find();
    }
}
@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private readonly roleRepository: Repository<Student>,
    ) {}

    async findAll(): Promise<Student[]> {
        return this.roleRepository.find();
    }
}
@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private readonly roleRepository: Repository<Project>,
    ) {}

    async findAll(): Promise<Project[]> {
        return this.roleRepository.find();
    }
}
@Injectable()
export class ProjectMemberService {
    constructor(
        @InjectRepository(ProjectMember)
        private readonly roleRepository: Repository<ProjectMember>,
    ) {}

    async findAll(): Promise<ProjectMember[]> {
        return this.roleRepository.find();
    }
}