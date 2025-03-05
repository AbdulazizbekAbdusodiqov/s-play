import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Injectable()
export class ContentService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createContentDto: CreateContentDto) {
    return this.prismaService.content.create({
      data: createContentDto
    });
  }

  findAll() {
    return this.prismaService.content.findMany({
      include: { CategoryContent: true },
    });
  }

  async findOne(id: number) {
    const content = await this.prismaService.content.findUnique({
      where: { id },
      include: { CategoryContent: true },
    });

    if (!content) {
      throw new NotFoundException(`Content #${id} topilmadi`);
    }
    return content;
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.prismaService.content.update({
      where: { id },
      data: updateContentDto,
    });
  }

  async remove(id: number) {
    try {
      await this.prismaService.content.delete({ where: { id } });
      return { message: `Content #${id} o'chirildi` };
    } catch {
      throw new NotFoundException(`Content #${id} topilmadi`);
    }
  }
}
