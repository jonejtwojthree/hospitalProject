import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Department } from 'src/apis/department/entities/department.entity';
import { MedicalRecord } from 'src/apis/medicalRecord/entities/medicalRecord.entity';
import { MedicalSchedule } from 'src/apis/medicalSchedule/entities/medicalSchedule.entity';

@Entity()
@ObjectType()
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => Department, (department) => department.doctor)
  @Field(() => Department)
  department: Department;

  @OneToMany(() => MedicalRecord, (medicalRecord) => medicalRecord.doctor)
  @Field(() => MedicalRecord)
  medicalRecord: MedicalRecord[];

  @OneToMany(() => MedicalSchedule, (medicalSchedule) => medicalSchedule.doctor)
  @Field(() => MedicalSchedule)
  medicalSchedule: MedicalSchedule[];
}
