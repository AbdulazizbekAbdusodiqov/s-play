import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SeriesService {
  constructor(private readonly prismaService: PrismaService) {}
  
  create(createSeriesDto: CreateSeriesDto) {
    return this.prismaService.series.create({data:createSeriesDto})
  }
  
  findAll() {
    return this.prismaService.series.findMany()
  }
  
  findOne(id: number) {
    return this.prismaService.series.findUnique({where:{id}})
  }
  
  update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return this.prismaService.series.update({where:{id}, data:updateSeriesDto})
  }
  
  remove(id: number) {
    return this.prismaService.series.delete({where:{id}})
  }
}
