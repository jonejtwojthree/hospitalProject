import { Resolver } from '@nestjs/graphql';
import { DoctorService } from './doctor.service';

@Resolver()
export class DoctorResolver {
  constructor(private doctorService: DoctorService) {}
}
