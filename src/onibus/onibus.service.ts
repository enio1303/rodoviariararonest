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
    if (!createOnibusDto.companhia) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Campo >companhia< deve ser definido!',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const companiaExiste = await this.companhiaService.findOne(
      createOnibusDto.companhia.toString(),
    );

    if (!companiaExiste) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Companhia id não encontrada!',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    const saveOnibus: SaveOnibusDto = {
      nome: createOnibusDto.nome,
      assentos: createOnibusDto.assentos,
      companhia: companiaExiste,
    };
    return this.onibusRepository.save(saveOnibus);
  }

  findAll() {
    return this.onibusRepository.find({
      where: {},
      relations: ['companhia'],
    });
  }

  findOne(id: number) {
    return this.onibusRepository.findOne({
      where: { id: id },
      relations: ['companhia'],
    });
  }

  update(id: number, updateOnibusDto: UpdateOnibusDto) {
    return this.onibusRepository.update(id, updateOnibusDto);
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
