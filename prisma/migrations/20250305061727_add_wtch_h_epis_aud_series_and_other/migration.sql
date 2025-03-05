/*
  Warnings:

  - You are about to drop the `CategoryContent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Devices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ratings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoryContent" DROP CONSTRAINT "CategoryContent_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryContent" DROP CONSTRAINT "CategoryContent_contentId_fkey";

-- DropForeignKey
ALTER TABLE "Devices" DROP CONSTRAINT "Devices_userId_fkey";

-- DropForeignKey
ALTER TABLE "Ratings" DROP CONSTRAINT "Ratings_contentId_fkey";

-- DropForeignKey
ALTER TABLE "Ratings" DROP CONSTRAINT "Ratings_profileId_fkey";

-- DropTable
DROP TABLE "CategoryContent";

-- DropTable
DROP TABLE "Content";

-- DropTable
DROP TABLE "Devices";

-- DropTable
DROP TABLE "Ratings";

-- CreateTable
CREATE TABLE "devices" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "device_type" TEXT NOT NULL,
    "device_name" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "last_active" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "contentId" INTEGER,
    "rating_value" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "release_year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "trailer_url" TEXT NOT NULL,
    "average_rating" DECIMAL(65,30) NOT NULL,
    "is_available" BOOLEAN NOT NULL,
    "country_of_origin" TEXT NOT NULL,
    "content_type" TEXT NOT NULL,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category_content" (
    "id" SERIAL NOT NULL,
    "contentId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "category_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_genres" (
    "id" SERIAL NOT NULL,
    "contentId" INTEGER,
    "genresId" INTEGER,

    CONSTRAINT "content_genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watch_history" (
    "id" SERIAL NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "content_id" INTEGER NOT NULL,
    "episode_id" INTEGER,
    "watched_seconds" INTEGER NOT NULL,
    "last_watched" TIMESTAMP(3) NOT NULL,
    "is_completed" BOOLEAN NOT NULL,
    "content_type" TEXT NOT NULL,
    "profileId" INTEGER,
    "episodeId" INTEGER,

    CONSTRAINT "watch_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episode_audio" (
    "id" SERIAL NOT NULL,
    "audio_track_id" INTEGER NOT NULL,
    "is_main" BOOLEAN NOT NULL,
    "episodeId" INTEGER,

    CONSTRAINT "episode_audio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "series" (
    "id" SERIAL NOT NULL,
    "total_seasons" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "contentId" INTEGER,

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "season" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "seriesId" INTEGER,
    "description" TEXT NOT NULL,
    "season_number" INTEGER NOT NULL,
    "total_episodes" INTEGER NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "trailer_url" TEXT NOT NULL,

    CONSTRAINT "season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episode" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "episode_number" INTEGER NOT NULL,
    "seasonId" INTEGER,

    CONSTRAINT "episode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_content" ADD CONSTRAINT "category_content_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_content" ADD CONSTRAINT "category_content_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_genres" ADD CONSTRAINT "content_genres_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_genres" ADD CONSTRAINT "content_genres_genresId_fkey" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watch_history" ADD CONSTRAINT "watch_history_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watch_history" ADD CONSTRAINT "watch_history_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "episode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episode_audio" ADD CONSTRAINT "episode_audio_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "episode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series" ADD CONSTRAINT "series_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "season" ADD CONSTRAINT "season_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "series"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episode" ADD CONSTRAINT "episode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE SET NULL ON UPDATE CASCADE;
