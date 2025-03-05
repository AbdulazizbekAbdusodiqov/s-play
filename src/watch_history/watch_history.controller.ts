import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WatchHistoryService } from './watch_history.service';
import { CreateWatchHistoryDto } from './dto/create-watch_history.dto';
import { UpdateWatchHistoryDto } from './dto/update-watch_history.dto';

@Controller('watch-history')
export class WatchHistoryController {
  constructor(private readonly watchHistoryService: WatchHistoryService) {}

  @Post()
  create(@Body() createWatchHistoryDto: CreateWatchHistoryDto) {
    return this.watchHistoryService.create(createWatchHistoryDto);
  }

  @Get()
  findAll() {
    return this.watchHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.watchHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWatchHistoryDto: UpdateWatchHistoryDto) {
    return this.watchHistoryService.update(+id, updateWatchHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.watchHistoryService.remove(+id);
  }
}
