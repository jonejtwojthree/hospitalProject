import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MedicalRecord } from 'src/apis/medicalRecord/entities/medicalRecord.entity';

@Entity()
@ObjectType()
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  jumin: string;

  @Column()
  @Field(() => String)
  age: number;

  @Column()
  @Field(() => String)
  address: string;

  @OneToMany(() => MedicalRecord, (medicalRecord) => medicalRecord.patient)
  @Field(() => MedicalRecord)
  medicalRecord: MedicalRecord[];
}
