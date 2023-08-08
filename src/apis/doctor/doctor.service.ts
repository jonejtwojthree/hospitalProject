import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';
import { DepartmentService } from '../department/department.service';
import { CreateDepartmentInput } from '../department/dto/create-Department.input';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    private readonly departmentService: DepartmentService,
  ) {}

  async create_Doctor({
    name,
    departmentName,
  }: IDoctorCreateDoctor): Promise<Doctor> {
    console.log(name, departmentName);
    const findOneDepartmentInput = { name: departmentName };

    const deptName = await this.departmentService.findOne_Department({
      findOneDepartmentInput,
    });

    return await this.doctorRepository.save({
      name: name,
      department: deptName,
    });
  }

  async delete_Doctor({ name }): Promise<string> {
    const hasDepartment = await this.findOne_Doctor({
      name,
    });
    const id = hasDepartment.id;
    const result = await this.doctorRepository.delete(id);

    if (result.affected === 0) {
      return `${name} 안 지워짐`;
    }
    return `${name} 지워짐`;
  }

  async findOne_Doctor({ name }: IDoctorFindOne): Promise<Doctor> {
    return await this.doctorRepository.findOne({
      where: { name },
      relations: ['department'],
    });
  }

  async findAll_Doctor(): Promise<Doctor[]> {
    return await this.doctorRepository.find({
      relations: ['department'],
    });
  }

  test(): string {
    return 'DoctorService';
  }
}

interface IDoctorFindOne {
  name: string;
}

interface IDoctorCreateDoctor {
  name: string;
  departmentName: string;
}
