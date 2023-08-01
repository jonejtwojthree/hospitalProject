import { Resolver } from '@nestjs/graphql';
import { PatientService } from './patient.service';

@Resolver()
export class PatientResolver {
  constructor(private prescriptionService: PatientService) {}
}
