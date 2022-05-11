import { Passageiro } from 'src/models/PassageiroEntity';
import { Viagem } from 'src/models/ViagemEntity';

export class CreateBilheteDto {
  passageiro: number;
  viagem: number;
  valor: number;
  ativo: boolean;
  cancelado: boolean;
}

export class SaveBilheteDto {
  passageiro: Passageiro;
  viagem: Viagem;
  valor: number;
  ativo: boolean;
  cancelado: boolean;
}
