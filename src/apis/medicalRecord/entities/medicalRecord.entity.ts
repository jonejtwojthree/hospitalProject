import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Department } from 'src/apis/department/entities/department.entity';
import { Doctor } from 'src/apis/doctor/entities/doctor.entity';
import { Patient } from 'src/apis/patient/entities/patient.entity';
import { Prescription } from 'src/apis/prescription/entities/prescription.entity';

@Entity()
@ObjectType()
export class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Date)
  date: Date;

  @Column()
  @Field(() => String)
  consult: string;

  @OneToOne(() => Patient)
  @JoinColumn()
  @Field(() => Patient)
  patient: Patient;

  @OneToOne(() => Doctor)
  @JoinColumn()
  @Field(() => Doctor)
  doctor: Doctor;

  @OneToOne(() => Department)
  @JoinColumn()
  @Field(() => Department)
  department: Department;

  @OneToOne(() => Prescription)
  @JoinColumn()
  @OneToOne(() => Prescription)
  prescription: Prescription;
}
