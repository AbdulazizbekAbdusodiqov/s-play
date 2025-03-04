import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { RefreshTokenGuard } from '../common/guards';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @UseGuards(RefreshTokenGuard)
  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languageService.create(createLanguageDto);
  }
  
  @Get()
  findAll() {
    return this.languageService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageService.findOne(+id);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLanguageDto: UpdateLanguageDto) {
    return this.languageService.update(+id, updateLanguageDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageService.remove(+id);
  }
}
