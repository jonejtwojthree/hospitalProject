import { Module } from '@nestjs/common';
import { MedicationResolver } from './medication.resolver';
import { MedicationService } from './medication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/medication.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medication])],
  providers: [MedicationResolver, MedicationService],
})
export class MedicationModule {}
