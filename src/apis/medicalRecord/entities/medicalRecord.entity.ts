import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
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

  @OneToOne(() => Prescription)
  @JoinColumn()
  prescription: Prescription;

  @ManyToOne(() => Patient, (patient) => patient.medicalRecord)
  @Field(() => Patient)
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.medicalRecord)
  @Field(() => Doctor)
  doctor: Doctor;

  @ManyToOne(() => Department, (department) => department.medicalRecord)
  @Field(() => Department)
  department: Department;
}
