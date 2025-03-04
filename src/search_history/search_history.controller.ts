import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SearchHistoryService } from './search_history.service';
import { CreateSearchHistoryDto } from './dto/create-search_history.dto';
import { UpdateSearchHistoryDto } from './dto/update-search_history.dto';
import { RefreshTokenGuard } from '../common/guards';

@Controller('search-history')
export class SearchHistoryController {
  constructor(private readonly searchHistoryService: SearchHistoryService) {}

  @UseGuards(RefreshTokenGuard)
  @Post()
  create(@Body() createSearchHistoryDto: CreateSearchHistoryDto) {
    return this.searchHistoryService.create(createSearchHistoryDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Get()
  findAll() {
    return this.searchHistoryService.findAll();
  }
  
  @UseGuards(RefreshTokenGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.searchHistoryService.findOne(+id);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSearchHistoryDto: UpdateSearchHistoryDto) {
    return this.searchHistoryService.update(+id, updateSearchHistoryDto);
  }
  
  @UseGuards(RefreshTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.searchHistoryService.remove(+id);
  }
}
