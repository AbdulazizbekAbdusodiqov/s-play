import { Injectable } from "@nestjs/common";
import { CreateContentGenreDto } from "./dto/create-content_genre.dto";
import { UpdateContentGenreDto } from "./dto/update-content_genre.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ContentGenresService {
    constructor(private readonly prismaService: PrismaService) {}

    create(createContentGenreDto: CreateContentGenreDto) {
        return this.prismaService.contentGenres.create({data:createContentGenreDto})
    }

    findAll() {
        return this.prismaService.contentGenres.findMany()
    }

    findOne(id: number) {
        return this.prismaService.contentGenres.findUnique({where:{id}})
    }

    update(id: number, updateContentGenreDto: UpdateContentGenreDto) {
        return this.prismaService.contentGenres.update({where:{id}, data:updateContentGenreDto})
    }

    remove(id: number) {
        return this.prismaService.contentGenres.delete({where:{id}})
    }
}
