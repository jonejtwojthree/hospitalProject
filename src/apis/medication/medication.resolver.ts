import { Resolver, Query } from '@nestjs/graphql';
import { MedicationService } from './medication.service';

@Resolver()
export class MedicationResolver {
  constructor(private medicationService: MedicationService) {}

  @Query(() => String)
  test(): string {
    return this.medicationService.test();
  }
}
