import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bilhete } from 'src/models/BilheteEntity';
import { PassageiroService } from 'src/passageiro/passageiro.service';
import { ViagemService } from 'src/viagem/viagem.service';
import { Repository } from 'typeorm';
import { CreateBilheteDto, SaveBilheteDto } from './dto/create-bilhete.dto';
import { UpdateBilheteDto } from './dto/update-bilhete.dto';

@Injectable()
export class BilheteService {
  constructor(
    @InjectRepository(Bilhete)
    private bilheteRepository: Repository<Bilhete>,
    private viagemService: ViagemService,
    private passageiroService: PassageiroService,
  ) {}

  async create(createBilheteDto: CreateBilheteDto) {
    const bilheteExiste = await this.viagemService.findOne(
      createBilheteDto.viagem,
    );

    const passageiroExiste = await this.passageiroService.findOne(
      createBilheteDto.passageiro,
    );

    const saveViagem: SaveBilheteDto = {
      passageiro: passageiroExiste,
      viagem: bilheteExiste,
      valor: createBilheteDto.valor,
      ativo: createBilheteDto.ativo,
      cancelado: createBilheteDto.cancelado,
    };
    return this.bilheteRepository.save(saveViagem);
  }

  async findAll() {
    return await this.bilheteRepository.find({
      where: {},
      relations: ['passageiro', 'viagem'],
    });
  }

  async findOne(id: number) {
    const bilheteExiste = await this.bilheteRepository.findOne({
      where: { id: id },
      relations: ['passageiro', 'viagem'],
    });
    if (!bilheteExiste) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Bilhete id não encontrado!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return bilheteExiste;
  }

  update(id: number, updateBilheteDto: UpdateBilheteDto) {
    return `This action updates a #${id} bilhete`;
  }

  remove(id: number) {
    return `This action removes a #${id} bilhete`;
  }
}
