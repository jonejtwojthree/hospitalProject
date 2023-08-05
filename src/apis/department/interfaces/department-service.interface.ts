import { CreateDepartmentInput } from '../dto/create-Department.input';
import { FindOneDepartmentInput } from '../dto/findOne-Department.input';

export interface IcreateDepartment {
  createDepartmentInput: CreateDepartmentInput;
}

export interface IDepartmentFindOne {
  findOneDepartmentInput: FindOneDepartmentInput;
}
