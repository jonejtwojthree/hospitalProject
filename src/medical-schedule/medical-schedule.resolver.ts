import { Resolver } from '@nestjs/graphql';
import { MedicalScheduleService } from './medical-schedule.service';

@Resolver()
export class MedicalScheduleResolver {
  constructor(private prescriptionService: MedicalScheduleService) {}
}
