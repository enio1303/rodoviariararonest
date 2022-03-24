import { Companhia } from '../../models/CompanhiaEntity';
import { IsInt, IsString } from 'class-validator';

export class CreateOnibusDto {
  @IsString()
  readonly nome: string;
  @IsInt()
  readonly assentos: number;
  @IsInt()
  readonly companhia: number;
}

export class SaveOnibusDto {
  nome: string;
  assentos: number;
  companhia: Companhia;
}
