import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePassageiroDto } from './dto/create-passageiro.dto';
import { UpdatePassageiroDto } from './dto/update-passageiro.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Passageiro } from 'src/models/PassageiroEntity';

@Injectable()
export class PassageiroService {
  constructor(
    @InjectRepository(Passageiro)
    private PassageirosRepository: Repository<Passageiro>,
  ) {}

  create(createPassageiroDto: CreatePassageiroDto) {
    return this.PassageirosRepository.save(createPassageiroDto);
  }

  findAll() {
    return this.PassageirosRepository.find({
      select: ['id', 'nome', 'email'],
      where: {},
      relations: [],
    });
  }

  async findOne(id: number) {
    const passageiroExiste = await this.PassageirosRepository.findOne({
      select: ['id', 'nome', 'email'],
      where: { id: id },
      relations: [],
    });
    if (!passageiroExiste) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Passageiro id não encontrada!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return passageiroExiste;
  }

  update(id: number, updatePassageiroDto: UpdatePassageiroDto) {
    return this.PassageirosRepository.update(id, updatePassageiroDto);
  }

  remove(id: number) {
    return this.PassageirosRepository.delete(id);
  }
}
