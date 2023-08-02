import { Resolver, Query } from '@nestjs/graphql';
import { PatientService } from './patient.service';

@Resolver()
export class PatientResolver {
  constructor(private prescriptionService: PatientService) {}
  @Query(() => String)
  test(): string {
    return this.prescriptionService.test();
  }
}
