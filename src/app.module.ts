import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CompanhiaModule } from './companhia/companhia.module';
import { Companhia } from './models/CompanhiaEntity';
import { Funcionario } from './models/FuncionarioEntity';
import { Onibus } from './models/OnibusEntity';
import { Viagem } from './models/ViagemEntity';
import { Bilhete } from './models/BilheteEntity';
import { Passageiro } from './models/PassageiroEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'teste',
      password: 'teste',
      database: 'rodoviariararo',
      entities: [Companhia, Funcionario, Onibus, Viagem, Bilhete, Passageiro],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    CompanhiaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
