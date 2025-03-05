import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRaitingDto } from './dto/update-raiting.dto';
import { CreateRatingDto } from './dto/create-raiting.dto';

@Injectable()
export class RaitingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRaitingDto: CreateRatingDto) {
    return await this.prisma.ratings.create({
      data: createRaitingDto,
    });
  }

  async findAll() {
    return await this.prisma.ratings.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.ratings.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRaitingDto: UpdateRaitingDto) {
    return await this.prisma.ratings.update({
      where: { id },
      data: updateRaitingDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.ratings.delete({
      where: { id },
    });
  }
}
