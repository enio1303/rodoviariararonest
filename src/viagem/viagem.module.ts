import { Module } from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { ViagemController } from './viagem.controller';
import { Viagem } from '../models/ViagemEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanhiaModule } from '../companhia/companhia.module';
import { OnibusModule } from '../onibus/onibus.module';

@Module({
  imports: [TypeOrmModule.forFeature([Viagem]), CompanhiaModule, OnibusModule],
  controllers: [ViagemController],
  providers: [ViagemService],
  exports: [ViagemService],
})
export class ViagemModule {}
