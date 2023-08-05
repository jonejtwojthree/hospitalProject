import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';
import { CreateDepartmentInput } from './dto/create-Department.input';
import { FindOneDepartmentInput } from './dto/findOne-Department.input';

@Resolver('Department')
export class DepartmentResolver {
  constructor(private departmentService: DepartmentService) {}

  @Mutation(() => Department)
  create_Department(
    @Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput,
  ): Promise<Department> {
    return this.departmentService.create_Department({ createDepartmentInput });
  }

  @Mutation(() => String)
  delete_Department(@Args('name') name: string): Promise<string> {
    return this.departmentService.delete_Department({ name });
  }

  @Query(() => Department)
  findOne_Department(
    @Args('findOneDepartmentInput')
    findOneDepartmentInput: FindOneDepartmentInput,
  ): Promise<Department> {
    return this.departmentService.findOne_Department({
      findOneDepartmentInput,
    });
  }

  @Query(() => [Department])
  findAll_Department(): Promise<Department[]> {
    return this.departmentService.findAll_Department();
  }

  @Query(() => String)
  test(): string {
    return this.departmentService.test();
  }
}
