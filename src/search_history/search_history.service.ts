import { Injectable } from "@nestjs/common";
import { CreateSearchHistoryDto } from "./dto/create-search_history.dto";
import { UpdateSearchHistoryDto } from "./dto/update-search_history.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SearchHistoryService {

    constructor(private readonly prismaService: PrismaService) {}

    create(createSearchHistoryDto: CreateSearchHistoryDto) {
        return this.prismaService.serachHistory.create({data:createSearchHistoryDto})
      }
      
      findAll() {
      return this.prismaService.serachHistory.findMany({include:{profile:true}})
    }
    
    findOne(id: number) {
      return this.prismaService.serachHistory.findUnique({where:{id}, include:{profile:true}})
    }
    
    update(id: number, updateSearchHistoryDto: UpdateSearchHistoryDto) {
      return this.prismaService.serachHistory.update({where:{id}, data:updateSearchHistoryDto, include:{profile:true}})
    }
    
    remove(id: number) {
      return this.prismaService.serachHistory.delete({where:{id}})
    }
}
