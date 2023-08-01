import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Department } from 'src/apis/department/entities/department.entity';

@Entity()
@ObjectType()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  history: string;

  @ManyToOne(() => Department)
  @Field(() => Department)
  department: Department;
}
