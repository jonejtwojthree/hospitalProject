import { Resolver } from '@nestjs/graphql';
import { MedicalSchedulerService } from './medicalSchedule.service';

@Resolver()
export class MedicalScheduleResolver {
  constructor(private prescriptionService: MedicalSchedulerService) {}
}
