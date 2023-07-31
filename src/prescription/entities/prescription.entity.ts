import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Medication } from 'src/medication/entities/medication.entity';
@Entity()
export class Prescription {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  opinion: string;

  @OneToOne(() => Doctor)
  @JoinColumn()
  doctor: Doctor;

  @OneToMany(() => Medication, (medication) => medication.prescription)
  medication: Medication[];
}
