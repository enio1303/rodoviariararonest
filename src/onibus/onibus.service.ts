import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanhiaService } from 'src/companhia/companhia.service';
import { Repository } from 'typeorm';
import { Onibus } from '../models/OnibusEntity';
import { CreateOnibusDto, SaveOnibusDto } from './dto/create-onibus.dto';
import { UpdateOnibusDto } from './dto/update-onibus.dto';

@Injectable()
export class OnibusService {
  constructor(
    @InjectRepository(Onibus)
    private onibusRepository: Repository<Onibus>,
    private companhiaService: CompanhiaService,
  ) {}

  findByCompanhia(idCompanhia: number) {
    return this.onibusRepository.find({
      where: { companhia: { id: idCompanhia } },
      relations: ['companhia'],
    });
  }

  async create(createOnibusDto: CreateOnibusDto) {
    const companiaExiste = await this.companhiaService.findOne(
      createOnibusDto.companhia,
    );

    const saveOnibus: SaveOnibusDto = {
      nome: createOnibusDto.nome,
      assentos: createOnibusDto.assentos,
      companhia: companiaExiste,
    };
    return this.onibusRepository.save(saveOnibus);
  }

  async findAll() {
    return await this.onibusRepository.find({
      where: {},
      relations: ['companhia'],
    });
  }

  async findOne(id: number) {
    const onibusExiste = await this.onibusRepository.findOne({
      where: { id: id },
      relations: ['companhia'],
    });

    if (!onibusExiste) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Onibus id não encontrada!',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    return onibusExiste;
  }

  async update(id: number, updateOnibusDto: UpdateOnibusDto) {
    return await this.onibusRepository.update(id, updateOnibusDto);
  }

  async remove(id: number) {
    const funcionario = await this.onibusRepository.findOne(id);
    if (!funcionario) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Onibus não encontrado.',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    await this.onibusRepository.delete(id);

    return { msg: 'Onibus deletado com sucesso!' };
  }
}
