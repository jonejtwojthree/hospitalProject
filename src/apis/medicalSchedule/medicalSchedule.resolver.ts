import { Resolver, Query } from '@nestjs/graphql';
import { MedicalSchedulerService } from './medicalSchedule.service';

@Resolver()
export class MedicalScheduleResolver {
  constructor(private prescriptionService: MedicalSchedulerService) {}

  @Query(() => String)
  test(): string {
    return this.prescriptionService.test();
  }
}
