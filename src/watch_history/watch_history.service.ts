import { Injectable } from '@nestjs/common';
import { CreateWatchHistoryDto } from './dto/create-watch_history.dto';
import { UpdateWatchHistoryDto } from './dto/update-watch_history.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WatchHistoryService {
    constructor(private readonly prismaService: PrismaService) {}
  
  create(createWatchHistoryDto: CreateWatchHistoryDto) {
    return this.prismaService.watchHistory.create({data:createWatchHistoryDto})
  }
  
  findAll() {
    return this.prismaService.watchHistory.findMany()
  }
  
  findOne(id: number) {
    return this.prismaService.watchHistory.findUnique({where:{id}})
  }
  
  update(id: number, updateWatchHistoryDto: UpdateWatchHistoryDto) {
    return this.prismaService.watchHistory.update({where:{id}, data:updateWatchHistoryDto})
  }
  
  remove(id: number) {
    return this.prismaService.watchHistory.delete({where:{id}})
  }
}
