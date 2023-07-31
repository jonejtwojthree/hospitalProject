import { Resolver } from '@nestjs/graphql';
import { MedicationService } from './medication.service';

@Resolver()
export class MedicationResolver {
  constructor(private prescriptionService: MedicationService) {}
}
