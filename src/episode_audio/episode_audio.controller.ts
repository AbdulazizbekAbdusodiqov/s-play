import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EpisodeAudioService } from './episode_audio.service';
import { CreateEpisodeAudioDto } from './dto/create-episode_audio.dto';
import { UpdateEpisodeAudioDto } from './dto/update-episode_audio.dto';

@Controller('episode-audio')
export class EpisodeAudioController {
  constructor(private readonly episodeAudioService: EpisodeAudioService) {}

  @Post()
  create(@Body() createEpisodeAudioDto: CreateEpisodeAudioDto) {
    return this.episodeAudioService.create(createEpisodeAudioDto);
  }

  @Get()
  findAll() {
    return this.episodeAudioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodeAudioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpisodeAudioDto: UpdateEpisodeAudioDto) {
    return this.episodeAudioService.update(+id, updateEpisodeAudioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.episodeAudioService.remove(+id);
  }
}
