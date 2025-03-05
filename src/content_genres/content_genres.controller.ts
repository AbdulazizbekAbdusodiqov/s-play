import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentGenresService } from './content_genres.service';
import { CreateContentGenreDto } from './dto/create-content_genre.dto';
import { UpdateContentGenreDto } from './dto/update-content_genre.dto';

@Controller('content-genres')
export class ContentGenresController {
  constructor(private readonly contentGenresService: ContentGenresService) {}

  @Post()
  create(@Body() createContentGenreDto: CreateContentGenreDto) {
    return this.contentGenresService.create(createContentGenreDto);
  }

  @Get()
  findAll() {
    return this.contentGenresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentGenresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentGenreDto: UpdateContentGenreDto) {
    return this.contentGenresService.update(+id, updateContentGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentGenresService.remove(+id);
  }
}
