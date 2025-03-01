import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CategoryService {
    constructor(private readonly prismaService: PrismaService) {}

    create(createCategoryDto: CreateCategoryDto) {
        return this.prismaService.category.create({ data: createCategoryDto });
    }

    findAll() {
        return this.prismaService.category.findMany();
    }

    findOne(id: number) {
        return this.prismaService.category.findUnique({ where: { id } });
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return this.prismaService.category.update({
            where: { id },
            data: updateCategoryDto,
        });
    }

    remove(id: number) {
        return this.prismaService.category.delete({ where: { id } });
    }
}
