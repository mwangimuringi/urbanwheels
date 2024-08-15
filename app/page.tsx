import { fetchCars } from '@/lib/db';
import { ShowMore } from '@/components';
import CarCard from '@/components/CarCard';
import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/hero';
import SearchBar from '@/components/SearchBar';
import { fuels, yearsOfProduction } from '@/constants';
import { CarProps, HomeProps } from '@/types';
import React from 'react';

export default async function Home({ searchParams }: HomeProps) {
  try {
    const cars = await fetchCars({
      manufacturer: searchParams.manufacturer || '',
      year: searchParams.year || 2024,
      fuel: searchParams.fuel || '',
      limit: searchParams.limit || 10,
      model: searchParams.model || '',
    });

    const isDataEmpty = !Array.isArray(cars) || cars.length < 1;

    return (
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 px-1 py-1 max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore cars you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>

              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > cars.length}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">OOPS, NO CAR</h2>
              <p>No cars available based on your search criteria.</p>
            </div>
          )}
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);
    return (
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 px-1 py-1 max-width" id="discover">
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Error</h2>
            <p>There was an error fetching the car data.</p>
          </div>
        </div>
      </main>
    );
  }
}
