import { Module } from '@nestjs/common';
import { MedicalRecordResolver } from './medicalRecord.resolver';
import { MedicalRecordService } from './medicalRecord.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRecord } from './entities/medicalRecord.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalRecord])],
  providers: [MedicalRecordResolver, MedicalRecordService],
})
export class MedicalRecordModule {}
