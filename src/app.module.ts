import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from "./auth/auth.module";
import { LanguageModule } from './language/language.module';
import { ProfileModule } from './profile/profile.module';
import { CategoryModule } from './category/category.module';
import { GenresModule } from './genres/genres.module';
import { GenresImagesModule } from './genres_images/genres_images.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { SubscriptionPlansModule } from './subscription_plans/subscription_plans.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { BillingHistoryModule } from './billing_history/billing_history.module';

@Module({
    imports: [
      ConfigModule.forRoot({
        envFilePath: ".env",
        isGlobal: true,
    }),
      PrismaModule,
      AdminModule,
      AuthModule,
      LanguageModule,
      ProfileModule,
      CategoryModule,
      GenresModule,
      GenresImagesModule,
      PaymentMethodModule,
      SubscriptionPlansModule,
      SubscriptionModule,
      BillingHistoryModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
