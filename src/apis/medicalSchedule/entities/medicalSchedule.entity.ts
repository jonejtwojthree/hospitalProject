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

@Entity()
@ObjectType()
export class MedicalSchedule {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Date)
  date: Date;

  @Column()
  @Field(() => String)
  symptom: string;

  @ManyToOne(() => Department, (department) => department.medicalSchedule)
  @Field(() => Department)
  department: Department;

  @OneToOne(() => Patient)
  @JoinColumn()
  @Field(() => Patient)
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.medicalSchedule)
  @Field(() => Doctor)
  doctor: Doctor;
}
