/*
  Warnings:

  - You are about to drop the column `content_id` on the `watch_history` table. All the data in the column will be lost.
  - You are about to drop the column `episode_id` on the `watch_history` table. All the data in the column will be lost.
  - You are about to drop the column `profile_id` on the `watch_history` table. All the data in the column will be lost.
  - Added the required column `contentId` to the `watch_history` table without a default value. This is not possible if the table is not empty.
  - Made the column `profileId` on table `watch_history` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "watch_history" DROP CONSTRAINT "watch_history_profileId_fkey";

-- AlterTable
ALTER TABLE "watch_history" DROP COLUMN "content_id",
DROP COLUMN "episode_id",
DROP COLUMN "profile_id",
ADD COLUMN     "contentId" INTEGER NOT NULL,
ALTER COLUMN "profileId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "watch_history" ADD CONSTRAINT "watch_history_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watch_history" ADD CONSTRAINT "watch_history_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
