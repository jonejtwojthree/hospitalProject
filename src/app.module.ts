import { Module } from '@nestjs/common';
import { Department } from './department/entities/department.entity';
import { HospitalModule } from './hospital/hospital.module';
import { DoctorModule } from './doctor/doctor.module';
import { MedicalRecordModule } from './medicalRecord/medicalRecord.module';

@Module({
  imports: [Department, DoctorModule, HospitalModule, MedicalRecordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
