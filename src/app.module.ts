import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//////////////////////////////////////////////
// graphqql

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
//////////////////////////////////////////////
// schema

import { Department } from './apis/department/entities/department.entity';
import { HospitalModule } from './apis//hospital/hospital.module';
import { DoctorModule } from './apis//doctor/doctor.module';
import { MedicalRecordModule } from './apis//medicalRecord/medicalRecord.module';
import { MedicalScheduleModule } from './apis//medicalSchedule/medicalSchedule.module';
import { MedicationModule } from './apis//medication/medication.module';
import { PatientModule } from './apis//patient/patient.module';
import { PrescriptionModule } from './apis//prescription/prescription.module';

@Module({
  imports: [
    Department,
    DoctorModule,
    HospitalModule,
    MedicalRecordModule,
    MedicalScheduleModule,
    MedicationModule,
    PatientModule,
    PrescriptionModule,

    //
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema/schema.gql',
    }),

    //
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'hospitaldb',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
