import { Department } from 'src/department/entities/department.entity';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Medication } from 'src/medication/entities/medication.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
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

  @OneToMany(() => Medication, (medication) => medication.medicalRecord)
  medication: Medication[];
}
