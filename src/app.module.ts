import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from "./auth/auth.module";

@Module({
    imports: [
      ConfigModule.forRoot({
        envFilePath: ".env",
        isGlobal: true,
    }),
      PrismaModule,
      AdminModule,
      AuthModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
