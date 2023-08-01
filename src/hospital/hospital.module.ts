import { Module } from '@nestjs/common';
import { HospitalResolver } from './hospital.resolver';
import { HospitalService } from './hospital.service';

@Module({
  imports: [],
  providers: [HospitalResolver, HospitalService],
})
export class HospitalModule {}
