import { Module } from '@nestjs/common';
import { DoctorResolver } from './doctor.resolver';
import { DoctorService } from './doctor.service';

@Module({
  imports: [],
  providers: [DoctorResolver, DoctorService],
})
export class DoctorModule {}
