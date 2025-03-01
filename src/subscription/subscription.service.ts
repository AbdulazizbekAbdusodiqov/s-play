import { Injectable } from "@nestjs/common";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SubscriptionService {
    constructor(private readonly prismaService: PrismaService) {}

    create(createSubscriptionDto: CreateSubscriptionDto) {
        return this.prismaService.subscription.create({
            data: createSubscriptionDto,
        });
    }

    findAll() {
        return this.prismaService.subscription.findMany({
            include: {
                plan: true,
                profil: {
                    omit: {
                        id: true,
                        name: true,
                        userId: true,
                        age: true,
                        avatar: true,
                        is_active: true,
                        languageId: true,
                    },
                },
            },
        });
    }

    findOne(id: number) {
        return this.prismaService.subscription.findUnique({
            where: { id },
            include: {
                plan: true,
                profil: {
                    omit: {
                        id: true,
                        name: true,
                        userId: true,
                        age: true,
                        avatar: true,
                        is_active: true,
                        languageId: true,
                    },
                },
            },
        });
    }

    update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
        return this.prismaService.subscription.update({
            where: { id },
            data: updateSubscriptionDto,
            include: {
                plan: true,
                profil: {
                    omit: {
                        id: true,
                        name: true,
                        userId: true,
                        age: true,
                        avatar: true,
                        is_active: true,
                        languageId: true,
                    },
                },
            },
        });
    }

    remove(id: number) {
        return this.prismaService.subscription.delete({where:{id}})
    }
}
