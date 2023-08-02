import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientService {
  test(): string {
    return 'PatientService';
  }
}
