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
import { SearchHistoryModule } from './search_history/search_history.module';
import { ContentGenresModule } from './content_genres/content_genres.module';
import { WatchHistoryModule } from './watch_history/watch_history.module';
import { EpisodeAudioModule } from './episode_audio/episode_audio.module';
import { SeriesModule } from './series/series.module';

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
      BillingHistoryModule,
      SearchHistoryModule,
      ContentGenresModule,
      WatchHistoryModule,
      EpisodeAudioModule,
      SeriesModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
