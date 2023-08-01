import { Module } from '@nestjs/common';
import { MedicalScheduleResolver } from './medicalSchedule.resolver';
import { MedicalSchedulerService } from './medicalSchedule.service';

@Module({
  imports: [],
  providers: [MedicalScheduleResolver, MedicalSchedulerService],
})
export class MedicalScheduleModule {}
