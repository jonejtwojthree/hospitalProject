import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindOneDepartmentInput {
  @Field(() => String)
  name: string;
}
