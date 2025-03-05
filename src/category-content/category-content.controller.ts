import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryContentService } from './category-content.service';
import { CreateCategoryContentDto } from './dto/create-category-content.dto';
import { UpdateCategoryContentDto } from './dto/update-category-content.dto';

@Controller('category-content')
export class CategoryContentController {
  constructor(private readonly categoryContentService: CategoryContentService) {}

  @Post()
  create(@Body() createCategoryContentDto: CreateCategoryContentDto) {
    return this.categoryContentService.create(createCategoryContentDto);
  }

  @Get()
  findAll() {
    return this.categoryContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryContentDto: UpdateCategoryContentDto) {
    return this.categoryContentService.update(+id, updateCategoryContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryContentService.remove(+id);
  }
}
