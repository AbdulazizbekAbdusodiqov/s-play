-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "is_owner" BOOLEAN NOT NULL DEFAULT false,
    "hashed_password" TEXT NOT NULL,
    "hashed_refresh_token" TEXT,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
