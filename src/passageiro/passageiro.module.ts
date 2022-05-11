import { Module } from '@nestjs/common';
import { PassageiroService } from './passageiro.service';
import { PassageiroController } from './passageiro.controller';
import { Passageiro } from 'src/models/PassageiroEntity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Passageiro])],
  controllers: [PassageiroController],
  providers: [PassageiroService],
  exports: [PassageiroService],
})
export class PassageiroModule {}
