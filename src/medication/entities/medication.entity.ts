import { MedicalRecord } from 'src/medical-record/entities/medical-record.entity';
import { Prescription } from 'src/prescription/entities/prescription.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Medication {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Prescription, (prescription) => prescription.medication)
  prescription: Prescription;

  @ManyToOne(() => MedicalRecord, (medicalRecord) => medicalRecord.medication)
  medicalRecord: MedicalRecord;
}
