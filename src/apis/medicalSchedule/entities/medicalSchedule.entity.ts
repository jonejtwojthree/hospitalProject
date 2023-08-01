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

  @OneToOne(() => Department)
  @JoinColumn()
  department: Department;

  @OneToOne(() => Patient)
  @JoinColumn()
  @Field(() => Patient)
  patient: Patient;

  @OneToOne(() => Doctor)
  @JoinColumn()
  @Field(() => Doctor)
  doctor: Doctor;
}
