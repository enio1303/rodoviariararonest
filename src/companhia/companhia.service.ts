import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findOne(id: number): Promise<Companhia> {
    const companiaExiste = await this.companhiasRepository.findOne(id);
    if (!companiaExiste) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Companhia id não encontrada!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return companiaExiste;
  }

  async remove(id: number): Promise<void> {
    await this.companhiasRepository.delete(id);
  }

  update(id: number, updateCompanhiaDto: UpdateCompanhiaDto) {
    return `This action updates a #${id} companhia`;
  }
}
