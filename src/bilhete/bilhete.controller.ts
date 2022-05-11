import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BilheteService } from './bilhete.service';
import { CreateBilheteDto } from './dto/create-bilhete.dto';
import { UpdateBilheteDto } from './dto/update-bilhete.dto';

@ApiBearerAuth()
@ApiTags('bilhete')
@Controller('bilhete')
export class BilheteController {
  constructor(private readonly bilheteService: BilheteService) {}

  @Post()
  @ApiOperation({ summary: 'Create bilhete' })
  create(@Body() createBilheteDto: CreateBilheteDto) {
    return this.bilheteService.create(createBilheteDto);
  }

  @Get()
  findAll() {
    return this.bilheteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bilheteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBilheteDto: UpdateBilheteDto) {
    return this.bilheteService.update(+id, updateBilheteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bilheteService.remove(+id);
  }
}
