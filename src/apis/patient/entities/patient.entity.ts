import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  naame: string;

  @Column()
  @Field(() => String)
  jumin: string;

  @Column()
  @Field(() => String)
  age: number;

  @Column()
  @Field(() => String)
  address: string;
}
