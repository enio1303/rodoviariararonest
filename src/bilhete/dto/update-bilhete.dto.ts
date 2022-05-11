import { PartialType } from '@nestjs/swagger';
import { CreateBilheteDto } from './create-bilhete.dto';

export class UpdateBilheteDto extends PartialType(CreateBilheteDto) {}
