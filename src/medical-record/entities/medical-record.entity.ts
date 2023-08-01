import { Department } from 'src/department/entities/department.entity';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import { Prescription } from 'src/prescription/entities/prescription.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class MedicalRecord {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  date: Date;

  @Column()
  consult: string;

  @OneToOne(() => Patient)
  @JoinColumn()
  patient: Patient;

  @OneToOne(() => Doctor)
  @JoinColumn()
  doctor: Doctor;

  @OneToOne(() => Department)
  @JoinColumn()
  department: Department;

  @OneToOne(() => Prescription)
  @JoinColumn()
  prescription: Prescription;
}
