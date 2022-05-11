import { Module } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { Funcionario } from '../models/FuncionarioEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanhiaModule } from '../companhia/companhia.module';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario]), CompanhiaModule],
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
})
export class FuncionarioModule {}
