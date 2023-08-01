import { Module } from '@nestjs/common';
import { PrescriptionResolver } from './prescription.resolver';
import { PrescriptionService } from './prescription.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prescription } from './entities/prescription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prescription])],
  providers: [PrescriptionResolver, PrescriptionService],
})
export class PrescriptionModule {}
