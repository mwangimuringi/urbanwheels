/*
  Warnings:

  - You are about to drop the column `city_mpg` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `combination_mpg` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `fuel_type` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `highway_mpg` on the `Car` table. All the data in the column will be lost.
  - Added the required column `cityMpg` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `combinationMpg` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuelType` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highwayMpg` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "city_mpg",
DROP COLUMN "combination_mpg",
DROP COLUMN "fuel_type",
DROP COLUMN "highway_mpg",
ADD COLUMN     "cityMpg" INTEGER NOT NULL,
ADD COLUMN     "combinationMpg" INTEGER NOT NULL,
ADD COLUMN     "fuelType" TEXT NOT NULL,
ADD COLUMN     "highwayMpg" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
