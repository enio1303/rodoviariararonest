import { Module } from '@nestjs/common';
import { BilheteService } from './bilhete.service';
import { BilheteController } from './bilhete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassageiroModule } from 'src/passageiro/passageiro.module';
import { ViagemModule } from 'src/viagem/viagem.module';
import { Bilhete } from 'src/models/BilheteEntity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bilhete]),
    ViagemModule,
    PassageiroModule,
  ],
  controllers: [BilheteController],
  providers: [BilheteService],
})
export class BilheteModule {}
