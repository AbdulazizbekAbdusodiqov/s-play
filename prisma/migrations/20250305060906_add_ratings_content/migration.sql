-- CreateTable
CREATE TABLE "Ratings" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "contentId" INTEGER,
    "rating_value" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
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

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ratings" ADD CONSTRAINT "Ratings_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;
