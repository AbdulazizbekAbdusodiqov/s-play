import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaitingsService } from './raitings.service';
import { UpdateRaitingDto } from './dto/update-raiting.dto';
import { CreateRatingDto } from './dto/create-raiting.dto';

@Controller('raitings')
export class RaitingsController {
  constructor(private readonly raitingsService: RaitingsService) {}

  @Post()
  create(@Body() createRaitingDto: CreateRatingDto) {
    return this.raitingsService.create(createRaitingDto);
  }

  @Get()
  findAll() {
    return this.raitingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raitingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaitingDto: UpdateRaitingDto) {
    return this.raitingsService.update(+id, updateRaitingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raitingsService.remove(+id);
  }
}
