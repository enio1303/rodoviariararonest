import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanhiaService } from 'src/companhia/companhia.service';
import { Viagem } from 'src/models/ViagemEntity';
import { OnibusService } from 'src/onibus/onibus.service';
import { Repository } from 'typeorm';
import { CreateViagemDto, SaveViagemDto } from './dto/create-viagem.dto';
import { UpdateViagemDto } from './dto/update-viagem.dto';

@Injectable()
export class ViagemService {
  constructor(
    @InjectRepository(Viagem)
    private viagemRepository: Repository<Viagem>,
    private companhiaService: CompanhiaService,
    private onibusService: OnibusService,
  ) {}

  async create(createViagemDto: CreateViagemDto) {
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
    return this.viagemRepository.save(saveViagem);
  }

  findAll() {
    return this.viagemRepository.find({
      where: {},
      relations: ['companhia', 'onibus'],
    });
  }

  findOne(id: number) {
    return this.viagemRepository.find({
      where: { id: id },
      relations: ['companhia', 'onibus'],
    });
  }

  update(id: number, updateViagemDto: SaveViagemDto) {
    return this.viagemRepository.update(id, updateViagemDto);
  }

  remove(id: number) {
    return this.viagemRepository.delete(id);
  }
}
