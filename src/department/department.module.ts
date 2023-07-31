import { Module } from '@nestjs/common';
import { DocumentResolver } from './department.resolver';
import { DocumentService } from './department.service';

@Module({
  imports: [],
  providers: [DocumentResolver, DocumentService],
})
export class PrescriptionModule {}
