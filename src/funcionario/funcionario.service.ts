import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from '../models/FuncionarioEntity';
import {
  CreateFuncionarioDto,
  SaveFuncionarioDto,
} from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { CompanhiaService } from '../companhia/companhia.service';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionariosRepository: Repository<Funcionario>,
    private companhiaService: CompanhiaService,
  ) {}

  findByCompanhia(idCompanhia: number) {
    return this.funcionariosRepository.find({
      select: ['id', 'nome', 'email', 'companhia'],
      where: { companhia: { id: idCompanhia } },
      relations: ['companhia'],
    });
  }

  async create(createFuncionarioDto: CreateFuncionarioDto) {
    const companiaExiste = await this.companhiaService.findOne(
      createFuncionarioDto.companhia,
    );

    const saveFuncionario: SaveFuncionarioDto = {
      nome: createFuncionarioDto.nome,
      email: createFuncionarioDto.email,
      hashSenha: createFuncionarioDto.hashSenha,
      companhia: companiaExiste,
    };
    return this.funcionariosRepository.save(saveFuncionario);
  }

  findAll() {
    return this.funcionariosRepository.find({
      select: ['id', 'nome', 'email', 'companhia'],
      where: {},
      relations: ['companhia'],
    });
  }

  findOne(id: number) {
    return this.funcionariosRepository.findOne({
      select: ['id', 'nome', 'email', 'companhia'],
      where: { id: id },
      relations: ['companhia'],
    });
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionariosRepository.update(id, updateFuncionarioDto);
  }

  async remove(id: number) {
    const funcionario = await this.funcionariosRepository.findOne(id);
    if (!funcionario) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Funcionário não encontrado.',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    await this.funcionariosRepository.delete(id);

    return { msg: 'Funcionário deletado com sucesso!' };
  }
}
