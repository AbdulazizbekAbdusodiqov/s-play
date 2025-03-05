import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryContentDto } from './dto/create-category-content.dto';
import { UpdateCategoryContentDto } from './dto/update-category-content.dto';

@Injectable()
export class CategoryContentService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCategoryContentDto: CreateCategoryContentDto) {
    return this.prismaService.categoryContent.create({
      data: createCategoryContentDto,
    });
  }

  findAll() {
    return this.prismaService.categoryContent.findMany({
      include: { Category: true },
    });
  }

  async findOne(id: number) {
    const categoryContent = await this.prismaService.categoryContent.findUnique({
      where: { id },
      include: { Category: true },
    });

    if (!categoryContent) {
      throw new NotFoundException(`CategoryContent #${id} topilmadi`);
    }
    return categoryContent;
  }

  update(id: number, updateCategoryContentDto: UpdateCategoryContentDto) {
    return this.prismaService.categoryContent.update({
      where: { id },
      data: updateCategoryContentDto,
    });
  }

  async remove(id: number) {
    try {
      await this.prismaService.categoryContent.delete({ where: { id } });
      return { message: `CategoryContent #${id} o'chirildi` };
    } catch {
      throw new NotFoundException(`CategoryContent #${id} topilmadi`);
    }
  }
}
