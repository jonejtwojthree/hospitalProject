import { Module } from '@nestjs/common';
import { PrescriptionResolver } from './doctor.resolver';
import { PrescriptionService } from './doctor.service';

@Module({
  imports: [],
  providers: [PrescriptionResolver, PrescriptionService],
})
export class PrescriptionModule {}
