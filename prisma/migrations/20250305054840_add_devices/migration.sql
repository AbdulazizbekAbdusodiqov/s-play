-- CreateTable
CREATE TABLE "Devices" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "device_type" TEXT NOT NULL,
    "device_name" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "last_active" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Devices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Devices" ADD CONSTRAINT "Devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
