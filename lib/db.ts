import { PrismaClient } from '@prisma/client';
import { CarProps } from '@/types';

const db = new PrismaClient();
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export async function fetchCars({
  manufacturer = '',
  year = 2024,
  fuel = '',
  limit = 10,
  model = '',
}: {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}) {
  try {
    const cars = await prisma.car.findMany({
      where: {
        AND: [
          { make: { contains: manufacturer, mode: 'insensitive' } },
          { year: { gte: year } },
          { fuelType: { contains: fuel, mode: 'insensitive' } },
          { model: { contains: model, mode: 'insensitive' } },
        ],
      },
      take: limit,
    });

    // Map the properties
    const mappedCars: CarProps[] = cars.map(car => ({
      id: car.id,
      createdAt: car.createdAt,
      updatedAt: car.updatedAt,
      cityMpg: car.cityMpg,
      combinationMpg: car.combinationMpg,
      cylinders: car.cylinders,
      displacement: car.displacement,
      drive: car.drive,
      fuelType: car.fuelType,
      highwayMpg: car.highwayMpg,
      make: car.make,
      model: car.model,
      transmission: car.transmission,
      year: car.year,
    }));

    return mappedCars;
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  } finally {
    await prisma.$disconnect(); // Ensure Prisma Client is disconnected
  }
}

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query']
  })

  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
