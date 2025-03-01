import { Injectable } from "@nestjs/common";
import { CreateGenresImageDto } from "./dto/create-genres_image.dto";
import { UpdateGenresImageDto } from "./dto/update-genres_image.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class GenresImagesService {
    constructor(private readonly prismaService: PrismaService) {}

    create(createGenresImageDto: CreateGenresImageDto) {
        return this.prismaService.genreImages.create({data:createGenresImageDto})
    }

    findAll() {
        return this.prismaService.genreImages.findMany()
    }

    findOne(id: number) {
        return this.prismaService.genreImages.findUnique({where:{id}})
    }

    update(id: number, updateGenresImageDto: UpdateGenresImageDto) {
        return this.prismaService.genreImages.update({where:{id}, data:updateGenresImageDto})
    }

    remove(id: number) {
        return this.prismaService.genreImages.delete({where:{id}})
    }
}
