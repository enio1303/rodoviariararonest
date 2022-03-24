import { PartialType } from '@nestjs/swagger';
import { CreateOnibusDto, SaveOnibusDto } from './create-onibus.dto';

export class UpdateOnibusDto extends PartialType(SaveOnibusDto) {}
