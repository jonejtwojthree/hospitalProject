import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicationService {
  test(): string {
    return 'MedicationService';
  }
}
