import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { DoctorService } from './doctor.service';
import { Doctor } from './entities/doctor.entity';

@Resolver()
export class DoctorResolver {
  constructor(private doctorService: DoctorService) {}

  @Mutation(() => Doctor)
  async create_Doctor(
    @Args('name') name: string,
    @Args('departmentName') departmentName: string,
  ): Promise<Doctor> {
    return await this.doctorService.create_Doctor({ name, departmentName });
  }

  @Mutation(() => String)
  delete_Doctor(@Args('name') name: string): Promise<string> {
    return this.doctorService.delete_Doctor({ name });
  }

  @Query(() => Doctor)
  findOne_Doctor(@Args('name') name: string): Promise<Doctor> {
    return this.doctorService.findOne_Doctor({ name });
  }

  @Query(() => [Doctor])
  findAll_Doctor(): Promise<Doctor[]> {
    return this.doctorService.findAll_Doctor();
  }

  @Query(() => String)
  test(): string {
    return this.doctorService.test();
  }
}
