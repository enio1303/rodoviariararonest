import { PartialType } from '@nestjs/swagger';
import { CreatePassageiroDto } from './create-passageiro.dto';

export class UpdatePassageiroDto extends PartialType(CreatePassageiroDto) {}
