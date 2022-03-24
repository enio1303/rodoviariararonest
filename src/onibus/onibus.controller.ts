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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('onibus')
@Controller('onibus')
export class OnibusController {
  constructor(private readonly onibusService: OnibusService) {}

  @Post()
  create(@Body() createOnibusDto: CreateOnibusDto) {
    return this.onibusService.create(createOnibusDto);
  }

  @Get()
  findAll() {
    return this.onibusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onibusService.findOne(+id);
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
