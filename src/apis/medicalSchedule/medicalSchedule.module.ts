import { Module } from '@nestjs/common';
import { MedicalScheduleResolver } from './medicalSchedule.resolver';
import { MedicalSchedulerService } from './medicalSchedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalSchedule } from './entities/medicalSchedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalSchedule])],
  providers: [MedicalScheduleResolver, MedicalSchedulerService],
})
export class MedicalScheduleModule {}
