import { Module } from "@nestjs/common";
import { SearchHistoryService } from "./search_history.service";
import { SearchHistoryController } from "./search_history.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [SearchHistoryController],
    providers: [SearchHistoryService],
})
export class SearchHistoryModule {}
