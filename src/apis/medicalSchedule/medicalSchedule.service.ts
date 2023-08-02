import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicalSchedulerService {
  test(): string {
    return 'MedicalSchedulerService';
  }
}
