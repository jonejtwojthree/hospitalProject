import { Resolver, Query } from '@nestjs/graphql';
import { PrescriptionService } from './prescription.service';

@Resolver()
export class PrescriptionResolver {
  constructor(private prescriptionService: PrescriptionService) {}
  @Query(() => String)
  test(): string {
    return this.prescriptionService.test();
  }
}
