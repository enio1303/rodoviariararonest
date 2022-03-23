import { PartialType } from '@nestjs/mapped-types';
import {
  CreateFuncionarioDto,
  SaveFuncionarioDto,
} from './create-funcionario.dto';

export class UpdateFuncionarioDto extends PartialType(SaveFuncionarioDto) {}
