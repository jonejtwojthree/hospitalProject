import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorService {
  test(): string {
    return 'DoctorService';
  }
}
