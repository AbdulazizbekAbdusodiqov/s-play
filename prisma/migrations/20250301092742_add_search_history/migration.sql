/*
  Warnings:

  - You are about to drop the `billinghistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "billinghistory" DROP CONSTRAINT "billinghistory_payment_methodId_fkey";

-- DropForeignKey
ALTER TABLE "billinghistory" DROP CONSTRAINT "billinghistory_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "billinghistory" DROP CONSTRAINT "billinghistory_userId_fkey";

-- DropTable
DROP TABLE "billinghistory";

-- CreateTable
CREATE TABLE "billing_history" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "subscriptionId" INTEGER NOT NULL,
    "payment_methodId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "BillingHistoryStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "billing_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search_history" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "search_query" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "search_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_payment_methodId_fkey" FOREIGN KEY ("payment_methodId") REFERENCES "payment_method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "search_history" ADD CONSTRAINT "search_history_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
