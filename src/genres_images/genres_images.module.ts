import { Module } from "@nestjs/common";
import { GenresImagesService } from "./genres_images.service";
import { GenresImagesController } from "./genres_images.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [GenresImagesController],
    providers: [GenresImagesService],
})
export class GenresImagesModule {}
