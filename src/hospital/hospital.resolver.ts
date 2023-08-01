import { Resolver } from '@nestjs/graphql';
import { HospitalService } from './hospital.service';

@Resolver()
export class HospitalResolver {
  constructor(private hospitalService: HospitalService) {}
}
