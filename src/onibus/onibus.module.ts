import { Module } from '@nestjs/common';
import { OnibusService } from './onibus.service';
import { OnibusController } from './onibus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Onibus } from '../models/OnibusEntity';
import { CompanhiaModule } from 'src/companhia/companhia.module';

@Module({
  imports: [TypeOrmModule.forFeature([Onibus]), CompanhiaModule],
  controllers: [OnibusController],
  providers: [OnibusService],
  exports: [OnibusService],
})
export class OnibusModule {}
