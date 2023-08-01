import { Module } from '@nestjs/common';
import { MedicalScheduleResolver } from './medical-schedule.resolver';
import { MedicalScheduleService } from './medical-schedule.service';

@Module({
  imports: [],
  providers: [MedicalScheduleResolver, MedicalScheduleService],
})
export class PrescriptionModule {}
