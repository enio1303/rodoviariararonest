import { Companhia } from '../../models/CompanhiaEntity';

export class CreateOnibusDto {
  nome: string;
  assentos: number;
  companhia: number;
}

export class SaveOnibusDto {
  nome: string;
  assentos: number;
  companhia: Companhia;
}
