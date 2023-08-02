import { Resolver, Query } from '@nestjs/graphql';
import { HospitalService } from './hospital.service';

@Resolver()
export class HospitalResolver {
  constructor(private hospitalService: HospitalService) {}

  @Query(() => String)
  test(): string {
    return this.hospitalService.test();
  }
}
