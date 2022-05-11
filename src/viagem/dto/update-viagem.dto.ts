import { PartialType } from '@nestjs/swagger';
import { CreateViagemDto, SaveViagemDto } from './create-viagem.dto';

export class UpdateViagemDto extends PartialType(CreateViagemDto) {}
