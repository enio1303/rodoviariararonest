import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OnibusService } from './onibus.service';
import { CreateOnibusDto } from './dto/create-onibus.dto';
import { UpdateOnibusDto } from './dto/update-onibus.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Onibus } from '../models/OnibusEntity';

@ApiTags('onibus')
@Controller('onibus')
export class OnibusController {
  constructor(private readonly onibusService: OnibusService) {}

  @Post()
  @ApiOperation({ summary: 'Create Onibus' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createOnibusDto: CreateOnibusDto): Promise<Onibus> {
    return this.onibusService.create(createOnibusDto);
  }

  @Get()
  findAll() {
    return this.onibusService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Onibus,
  })
  findOne(@Param('id') id: string) {
    return this.onibusService.findOne(+id);
  }

  @Get('companhia/:id')
  find(@Param('id') id: string) {
    return this.onibusService.findByCompanhia(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnibusDto: UpdateOnibusDto) {
    return this.onibusService.update(+id, updateOnibusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onibusService.remove(+id);
  }
}
