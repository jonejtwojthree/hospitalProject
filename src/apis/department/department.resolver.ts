import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { DocumentService } from './department.service';

@Resolver()
export class DocumentResolver {
  constructor(private prescriptionService: DocumentService) {}

  @Query(() => String)
  test(): string {
    return this.prescriptionService.test();
  }
}
