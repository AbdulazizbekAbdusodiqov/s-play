/*
  Warnings:

  - You are about to drop the column `paymentMethodId` on the `billinghistory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "billinghistory" DROP CONSTRAINT "billinghistory_paymentMethodId_fkey";

-- AlterTable
ALTER TABLE "billinghistory" DROP COLUMN "paymentMethodId";

-- AddForeignKey
ALTER TABLE "billinghistory" ADD CONSTRAINT "billinghistory_payment_methodId_fkey" FOREIGN KEY ("payment_methodId") REFERENCES "payment_method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
