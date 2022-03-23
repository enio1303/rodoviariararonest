import { Companhia } from '../../models/CompanhiaEntity';

export class CreateFuncionarioDto {
  nome: string;
  hashSenha: string;
  email: string;
  companhiaId: Companhia;
}
