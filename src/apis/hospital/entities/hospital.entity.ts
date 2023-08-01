import { Doctor } from 'src/apis/doctor/entities/doctor.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Hospital {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => String)
  introduction: string;

  @Column()
  @Field(() => String)
  number: string;

  @OneToOne(() => Doctor)
  @JoinColumn()
  @Field(() => Doctor)
  profile: Doctor;
}
