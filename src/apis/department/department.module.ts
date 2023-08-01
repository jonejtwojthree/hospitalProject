import { Module } from '@nestjs/common';
import { DocumentResolver } from './department.resolver';
import { DocumentService } from './department.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  providers: [DocumentResolver, DocumentService],
})
export class DepartModule {}
