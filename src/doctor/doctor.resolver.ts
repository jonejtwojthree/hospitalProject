import { Resolver } from '@nestjs/graphql';
import { PrescriptionService } from './doctor.service';

@Resolver()
export class PrescriptionResolver {
  constructor(private prescriptionService: PrescriptionService) {}
}
