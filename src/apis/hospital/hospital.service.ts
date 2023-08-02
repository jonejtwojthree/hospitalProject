import { Injectable } from '@nestjs/common';

@Injectable()
export class HospitalService {
  test(): string {
    return 'HospitalService';
  }
}
