import { Companhia } from 'src/models/CompanhiaEntity';
import { Onibus } from 'src/models/OnibusEntity';

export class CreateViagemDto {
  cidade_origem: string;
  cidade_destino: string;
  data_origem: Date;
  data_destino: Date;
  valor_viagem: number;
  assentos_disponiveis: number;
  ativo: boolean;
  companhia: number;
  onibus: number;
}

export class SaveViagemDto {
  cidade_origem: string;
  cidade_destino: string;
  data_origem: Date;
  data_destino: Date;
  valor_viagem: number;
  assentos_disponiveis: number;
  ativo: boolean;
  onibus: Onibus;
  companhia: Companhia;
}
