import { Doctor } from 'src/apis/doctor/entities/doctor.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MedicalRecord } from 'src/apis/medicalRecord/entities/medicalRecord.entity';
import { MedicalSchedule } from 'src/apis/medicalSchedule/entities/medicalSchedule.entity';

@Entity()
@ObjectType()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @OneToMany(() => Doctor, (doctor) => doctor.department)
  @Field(() => Doctor)
  doctor: Doctor[];

  @OneToMany(() => MedicalRecord, (medicalRecord) => medicalRecord.department)
  @Field(() => MedicalRecord)
  medicalRecord: MedicalRecord[];

  @OneToMany(
    () => MedicalSchedule,
    (medicalSchedule) => medicalSchedule.department,
  )
  @Field(() => MedicalSchedule)
  medicalSchedule: MedicalSchedule[];
}
