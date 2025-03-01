import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class ProfileService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createProfileDto: CreateProfileDto) {
        const { password, confirm_password, ...data } = createProfileDto;
        if (password != confirm_password) {
            throw new BadRequestException("parollar mos emas");
        }
        const hashed_password = await bcrypt.hash(password, 7);
        return this.prismaService.profile.create({
            data: { ...data, hashed_password },
        });
    }

    findAll() {
        return this.prismaService.profile.findMany({
            include: {
                user: {
                    omit: {
                        id: true,
                        age: true,
                        email: true,
                        gender: true,
                        createdAt: true,
                    },
                },
                langugage: true,
            },
        });
    }

    findOne(id: number) {
        return this.prismaService.profile.findUnique({
            where: { id },
            include: {
                user: {
                    omit: {
                        id: true,
                        age: true,
                        email: true,
                        gender: true,
                        createdAt: true,
                    },
                },
                langugage: true,
            },
        });
    }

    update(id: number, updateProfileDto: UpdateProfileDto) {
        return this.prismaService.profile.update({
            where: { id },
            data: updateProfileDto,
            include: {
                user: {
                    omit: {
                        id: true,
                        age: true,
                        email: true,
                        gender: true,
                        createdAt: true,
                    },
                },
                langugage: true,
            },
        });
    }

    remove(id: number) {
        return this.prismaService.profile.delete({ where: { id } });
    }
}
