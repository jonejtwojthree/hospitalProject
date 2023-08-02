import { Resolver, Query } from '@nestjs/graphql';
import { MedicalRecordService } from './medicalRecord.service';

@Resolver()
export class MedicalRecordResolver {
  constructor(private medicalRecordService: MedicalRecordService) {}

  @Query(() => String)
  test(): string {
    return this.medicalRecordService.test();
  }
}
