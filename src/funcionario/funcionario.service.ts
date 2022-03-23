import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from '../models/FuncionarioEntity';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionariosRepository: Repository<Funcionario>,
  ) {}

  findByCompanhia(idCompanhia: number) {
    return this.funcionariosRepository.find({
      where: { companhia: { id: idCompanhia } },
      relations: ['companhia'],
    });
  }

  create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionariosRepository.save(createFuncionarioDto);
  }

  findAll() {
    return this.funcionariosRepository.find({
      where: {},
      relations: ['companhia'],
    });
  }

  findOne(id: number) {
    return this.funcionariosRepository.findOne({
      where: { id: id },
      relations: ['companhia'],
    });
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionariosRepository.update(id, updateFuncionarioDto);
  }

  async remove(id: number) {
    return this.funcionariosRepository.delete(id);
  }
}
