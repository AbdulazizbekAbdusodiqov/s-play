import { Injectable } from '@nestjs/common';
import { CreateSubscriptionPlanDto } from './dto/create-subscription_plan.dto';
import { UpdateSubscriptionPlanDto } from './dto/update-subscription_plan.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SubscriptionPlansService {
      constructor(private readonly prismaService: PrismaService) {}
  
  create(createSubscriptionPlanDto: CreateSubscriptionPlanDto) {
    return this.prismaService.subscriptionPlans.create({data:createSubscriptionPlanDto})
  }

  findAll() {
    return this.prismaService.subscriptionPlans.findMany()
  }

  findOne(id: number) {
    return this.prismaService.subscriptionPlans.findUnique({where:{id}})
  }

  update(id: number, updateSubscriptionPlanDto: UpdateSubscriptionPlanDto) {
    return this.prismaService.subscriptionPlans.update({where:{id}, data:updateSubscriptionPlanDto})
  }

  remove(id: number) {
    return this.prismaService.subscriptionPlans.delete({where:{id}})
  }
}
