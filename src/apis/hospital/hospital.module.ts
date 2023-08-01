import { Module } from '@nestjs/common';
import { HospitalResolver } from './hospital.resolver';
import { HospitalService } from './hospital.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from './entities/hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital])],
  providers: [HospitalResolver, HospitalService],
})
export class HospitalModule {}
