import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Companhia } from 'src/models/CompanhiaEntity';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';
import { UpdateCompanhiaDto } from './dto/update-companhia.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CompanhiaService {
  constructor(
    @InjectRepository(Companhia)
    private companhiasRepository: Repository<Companhia>,
  ) {}

  create(createCompanhiaDto: CreateCompanhiaDto) {
    return this.companhiasRepository.save(createCompanhiaDto);
  }

  findAll(): Promise<Companhia[]> {
    return this.companhiasRepository.find();
  }

  findOne(id: string): Promise<Companhia> {
    return this.companhiasRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.companhiasRepository.delete(id);
  }

  update(id: string, updateCompanhiaDto: UpdateCompanhiaDto) {
    return `This action updates a #${id} companhia`;
  }
}
