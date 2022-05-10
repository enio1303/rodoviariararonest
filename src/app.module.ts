import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CompanhiaModule } from './companhia/companhia.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { OnibusModule } from './onibus/onibus.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule,
    CompanhiaModule,
    FuncionarioModule,
    OnibusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
