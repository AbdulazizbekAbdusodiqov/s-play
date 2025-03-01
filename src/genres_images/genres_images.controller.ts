import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenresImagesService } from './genres_images.service';
import { CreateGenresImageDto } from './dto/create-genres_image.dto';
import { UpdateGenresImageDto } from './dto/update-genres_image.dto';

@Controller('genres-images')
export class GenresImagesController {
  constructor(private readonly genresImagesService: GenresImagesService) {}

  @Post()
  create(@Body() createGenresImageDto: CreateGenresImageDto) {
    return this.genresImagesService.create(createGenresImageDto);
  }

  @Get()
  findAll() {
    return this.genresImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genresImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenresImageDto: UpdateGenresImageDto) {
    return this.genresImagesService.update(+id, updateGenresImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genresImagesService.remove(+id);
  }
}
