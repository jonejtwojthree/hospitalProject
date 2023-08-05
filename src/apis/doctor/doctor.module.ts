import { Module } from '@nestjs/common';
import { DoctorResolver } from './doctor.resolver';
import { DoctorService } from './doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor]), DepartmentModule],
  providers: [DoctorResolver, DoctorService],
})
export class DoctorModule {}
