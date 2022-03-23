import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Funcionario } from './FuncionarioEntity';
import { Onibus } from './OnibusEntity';
import { Viagem } from './ViagemEntity';

@Entity()
export class Companhia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Funcionario, (funcionario) => funcionario.companhia)
  funcionarios: Funcionario[];

  @OneToMany(() => Onibus, (onibus) => onibus.companhia)
  onibus: Onibus[];

  @OneToMany(() => Viagem, (viagem) => viagem.companhia)
  viagens: Viagem[];
}
