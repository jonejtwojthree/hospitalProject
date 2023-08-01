import { Module } from '@nestjs/common';
import { MedicalRecordResolver } from './medicalRecord.resolver';
import { MedicalRecordService } from './medicalRecord.service';

@Module({
  imports: [],
  providers: [MedicalRecordResolver, MedicalRecordService],
})
export class MedicalRecordModule {}
