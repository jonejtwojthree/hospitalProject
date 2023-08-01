import { Resolver } from '@nestjs/graphql';
import { MedicalRecordService } from './medicalRecord.service';

@Resolver()
export class MedicalRecordResolver {
  constructor(private medicalRecordService: MedicalRecordService) {}
}
