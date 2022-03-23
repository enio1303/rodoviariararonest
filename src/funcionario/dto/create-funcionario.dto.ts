import { Companhia } from '../../models/CompanhiaEntity';

export class CreateFuncionarioDto {
  nome: string;
  hashSenha: string;
  email: string;
  companhia: number;
}

export class SaveFuncionarioDto {
  nome: string;
  hashSenha: string;
  email: string;
  companhia: Companhia;
}
