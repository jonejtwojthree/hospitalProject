import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicalRecordService {
  test(): string {
    return 'MedicalRecordService';
  }
}
