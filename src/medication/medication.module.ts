import { Module } from '@nestjs/common';
import { MedicationResolver } from './medication.resolver';
import { MedicationService } from './medication.service';

@Module({
  imports: [],
  providers: [MedicationResolver, MedicationService],
})
export class MedicationModule {}
