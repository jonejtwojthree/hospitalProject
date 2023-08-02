import { Injectable } from '@nestjs/common';

@Injectable()
export class PrescriptionService {
  test(): string {
    return 'PrescriptionService';
  }
}
