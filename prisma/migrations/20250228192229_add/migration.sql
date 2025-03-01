-- CreateTable
CREATE TABLE "genres_images" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "genresId" INTEGER NOT NULL,
    "is_main" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genres_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "genres_images" ADD CONSTRAINT "genres_images_genresId_fkey" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
