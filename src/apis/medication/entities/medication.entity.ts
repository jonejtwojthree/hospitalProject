import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prescription } from 'src/apis/prescription/entities/prescription.entity';

@Entity()
@ObjectType()
export class Medication {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => Prescription)
  @Field(() => Prescription)
  prescription: Prescription;
}
