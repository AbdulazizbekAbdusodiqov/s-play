-- CreateTable
CREATE TABLE "CategoryContent" (
    "id" SERIAL NOT NULL,
    "contentId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "CategoryContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryContent" ADD CONSTRAINT "CategoryContent_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryContent" ADD CONSTRAINT "CategoryContent_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
