import { Resolver } from '@nestjs/graphql';
import { DocumentService } from './department.service';

@Resolver()
export class DocumentResolver {
  constructor(private prescriptionService: DocumentService) {}
}
