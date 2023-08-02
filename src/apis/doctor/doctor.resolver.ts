import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { DoctorService } from './doctor.service';

@Resolver()
export class DoctorResolver {
  constructor(private doctorService: DoctorService) {}

  @Query(() => String)
  test(): string {
    return this.doctorService.test();
  }
}
