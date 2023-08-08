import { Injectable } from '@nestjs/common';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  IDepartmentFindOne,
  IcreateDepartment,
} from './interfaces/department-service.interface';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async create_Department({
    createDepartmentInput,
  }: IcreateDepartment): Promise<Department | null> {
    const name = createDepartmentInput.name;
    const findOneDepartmentInput = { name };
    const hasDepartment = await this.findOne_Department({
      findOneDepartmentInput,
    });
    console.log(hasDepartment);
    if (hasDepartment === null) {
      const result = await this.departmentRepository.save({ name });
      console.log(result);
      return result;
    }
    return null;
  }

  async delete_Department({ name }): Promise<string> {
    const findOneDepartmentInput = { name };

    const hasDepartment = await this.findOne_Department({
      findOneDepartmentInput,
    });
    const id = hasDepartment.id;
    const result = await this.departmentRepository.delete(id);

    if (result.affected === 0) {
      return `${name} 안 지워짐`;
    }
    return `${name} 지워짐`;
  }

  async findOne_Department({
    findOneDepartmentInput,
  }: IDepartmentFindOne): Promise<Department | null> {
    const name = findOneDepartmentInput.name;
    return await this.departmentRepository.findOne({ where: { name: name } });
  }

  async findAll_Department(): Promise<Department[]> {
    const result = await this.departmentRepository.find();
    console.log(result);
    return result;
  }

  test(): string {
    return 'DocumentService';
  }
}
