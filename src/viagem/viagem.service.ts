import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanhiaService } from 'src/companhia/companhia.service';
import { Viagem } from 'src/models/ViagemEntity';
import { OnibusService } from 'src/onibus/onibus.service';
import { Repository } from 'typeorm';
import { CreateViagemDto, SaveViagemDto } from './dto/create-viagem.dto';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

@Injectable()
export class ViagemService {
  constructor(
    @InjectRepository(Viagem)
    private viagemRepository: Repository<Viagem>,
    private companhiaService: CompanhiaService,
    private onibusService: OnibusService,
  ) {}

  async create(createViagemDto: CreateViagemDto) {
    await this.verifyDatesBetween(
      createViagemDto.data_origem,
      createViagemDto.data_destino,
    );
    const viagem = await this.createViagem(createViagemDto);
    return this.viagemRepository.save(viagem);
  }

  private async verifyDatesBetween(data_origem: Date, data_destino: Date) {
    const moment = extendMoment(Moment);
    const date1 = moment(data_origem);
    const date2 = moment(data_destino);
    if (date2.diff(date1) < 0) {
      throw new HttpException(
        {
          status: HttpStatus.PRECONDITION_FAILED,
          error: 'Data origem e destino inválidas!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  findAll() {
    return this.viagemRepository.find({
      where: {},
      relations: ['companhia', 'onibus'],
    });
  }

  async findOne(id: number) {
    const viagemExiste = await this.viagemRepository.findOne({
      where: { id: id },
      relations: ['companhia', 'onibus'],
    });
    if (!viagemExiste) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Viagem id não encontrada!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return viagemExiste;
  }

  update(id: number, updateViagemDto: SaveViagemDto) {
    return this.viagemRepository.update(id, updateViagemDto);
  }

  remove(id: number) {
    return this.viagemRepository.delete(id);
  }

  private async createViagem(createViagemDto: CreateViagemDto) {
    const companiaExiste = await this.companhiaService.findOne(
      createViagemDto.companhia,
    );

    const onibusExiste = await this.onibusService.findOne(
      createViagemDto.onibus,
    );
    const saveViagem: SaveViagemDto = {
      cidade_origem: createViagemDto.cidade_origem,
      cidade_destino: createViagemDto.cidade_destino,
      data_origem: createViagemDto.data_origem,
      data_destino: createViagemDto.data_destino,
      valor_viagem: createViagemDto.valor_viagem,
      assentos_disponiveis: createViagemDto.assentos_disponiveis,
      ativo: createViagemDto.ativo,
      onibus: onibusExiste,
      companhia: companiaExiste,
    };
    return saveViagem;
  }
}
