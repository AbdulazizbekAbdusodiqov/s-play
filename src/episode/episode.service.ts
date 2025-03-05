import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EpisodeService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createEpisodeDto: CreateEpisodeDto) {  
    return this.prismaService.episode.create({data:createEpisodeDto})
  }
  
  findAll() {
    return this.prismaService.episode.findMany()
  }
  
  findOne(id: number) {
    return this.prismaService.episode.findUnique({where:{id}})
  }
  
  update(id: number, updateEpisodeDto: UpdateEpisodeDto) {
    return this.prismaService.episode.update({where:{id}, data:updateEpisodeDto})
  }
  
  remove(id: number) {
    return this.prismaService.episode.delete({where:{id}})
  }
}
