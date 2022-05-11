import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CompanhiaService } from './companhia.service';
import { CreateCompanhiaDto } from './dto/create-companhia.dto';
import { UpdateCompanhiaDto } from './dto/update-companhia.dto';

@ApiBearerAuth()
@ApiTags('companhia')
@Controller('companhia')
export class CompanhiaController {
  constructor(private readonly companhiaService: CompanhiaService) {}

  @Post()
  @ApiOperation({ summary: 'Create companhia' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createCompanhiaDto: CreateCompanhiaDto) {
    return this.companhiaService.create(createCompanhiaDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CreateCompanhiaDto,
  })
  findAll() {
    return this.companhiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companhiaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanhiaDto: UpdateCompanhiaDto,
  ) {
    return this.companhiaService.update(+id, updateCompanhiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companhiaService.remove(+id);
  }
}
