import { Injectable } from '@nestjs/common';
import { CreateEpisodeAudioDto } from './dto/create-episode_audio.dto';
import { UpdateEpisodeAudioDto } from './dto/update-episode_audio.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EpisodeAudioService {
  constructor(private readonly prismaService: PrismaService) {}
  
  create(createEpisodeAudioDto: CreateEpisodeAudioDto) {
    return this.prismaService.episodeAudio.create({data:createEpisodeAudioDto})
  }
  
  findAll() {
    return this.prismaService.episodeAudio.findMany()
  }
  
  findOne(id: number) {
    return this.prismaService.episodeAudio.findUnique({where:{id}})
  }
  
  update(id: number, updateEpisodeAudioDto: UpdateEpisodeAudioDto) {
    return this.prismaService.episodeAudio.update({where:{id}, data:updateEpisodeAudioDto})
  }
  
  remove(id: number) {
    return this.prismaService.episodeAudio.delete({where:{id}})
  }
}
