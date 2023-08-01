import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Doctor } from 'src/apis/doctor/entities/doctor.entity';
import { Medication } from 'src/apis/medication/entities/medication.entity';

@Entity()
@ObjectType()
export class Prescription {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  opinion: string;

  // @OneToMany(() => Medication, (medication) => medication.prescription)
  // medication: Medication[];

  @OneToOne(() => Doctor)
  @JoinColumn()
  @Field(() => Doctor)
  doctor: Doctor;
}
