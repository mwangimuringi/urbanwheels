/*
  Warnings:

  - You are about to drop the column `cityMpg` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `combinationMpg` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `fuelType` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `highwayMpg` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHash` on the `User` table. All the data in the column will be lost.
  - Added the required column `city_mpg` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `combination_mpg` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuel_type` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highway_mpg` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "cityMpg",
DROP COLUMN "combinationMpg",
DROP COLUMN "fuelType",
DROP COLUMN "highwayMpg",
ADD COLUMN     "city_mpg" INTEGER NOT NULL,
ADD COLUMN     "combination_mpg" INTEGER NOT NULL,
ADD COLUMN     "fuel_type" TEXT NOT NULL,
ADD COLUMN     "highway_mpg" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordHash",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
