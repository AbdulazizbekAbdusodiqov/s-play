import { Injectable } from "@nestjs/common";
import { CreateBillingHistoryDto } from "./dto/create-billing_history.dto";
import { UpdateBillingHistoryDto } from "./dto/update-billing_history.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BillingHistoryService {
    constructor(private readonly prismaService: PrismaService) {}

    create(createBillingHistoryDto: CreateBillingHistoryDto) {
        return this.prismaService.billingHistory.create({data:createBillingHistoryDto })
    }

    findAll() {
        return this.prismaService.billingHistory.findMany({include:{user:true, paymentmethod:true,subscription:true}})
    }

    findOne(id: number) {
        return this.prismaService.billingHistory.findUnique({where:{id},include:{user:true, paymentmethod:true,subscription:true}})
    }

    update(id: number, updateBillingHistoryDto: UpdateBillingHistoryDto) {
        return this.prismaService.billingHistory.update({where:{id}, data:updateBillingHistoryDto, include:{user:true, paymentmethod:true,subscription:true}})
    }

    remove(id: number) {
        return this.prismaService.billingHistory.delete({where:{id}})
    }
}
