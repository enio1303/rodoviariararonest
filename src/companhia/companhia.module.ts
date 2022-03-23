import { Module } from '@nestjs/common';
import { CompanhiaService } from './companhia.service';
import { CompanhiaController } from './companhia.controller';
import { Companhia } from '../models/CompanhiaEntity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Companhia])],
  controllers: [CompanhiaController],
  providers: [CompanhiaService],
  exports: [CompanhiaService],
})
export class CompanhiaModule {}
