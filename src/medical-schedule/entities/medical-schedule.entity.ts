import { Department } from 'src/department/entities/department.entity';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class MedicalSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  date: Date;

  @Column()
  symptom: string;

  @OneToOne(() => Department)
  @JoinColumn()
  department: Department;

  @OneToOne(() => Patient)
  @JoinColumn()
  patient: Patient;

  @OneToOne(() => Doctor)
  @JoinColumn()
  doctor: Doctor;
}
