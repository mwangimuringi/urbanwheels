"use client"
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'

import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState("");
  
    const filteredManufacturers =
      query === ""
        ? manufacturers
        : manufacturers.filter((item) =>
            item
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          );
  
    return (
      <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManufacturer}>
          <div className='relative w-full'>
            {/* Button for the combobox. Click on the icon to see the complete dropdown */}
            <ComboboxButton className='absolute top-[14px]'>
              <Image
                src='/car-logo.svg'
                width={20}
                height={20}
                className='ml-4'
                alt='car logo'
              />
            </ComboboxButton>
  
            {/* Input field for searching */}
            <ComboboxInput
              className='search-manufacturer__input'
              displayValue={(item: string) => item}
              onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
              placeholder='Volkswagen...'
            />
  
            {/* Transition for displaying the options */}
            <Transition
              as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setQuery("")} // Reset the search query after the transition completes
            >
              <ComboboxOptions
                className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                static
              >
                {filteredManufacturers.length === 0 && query !== "" ? (
                  <ComboboxOption
                    value={query}
                    className='search-manufacturer__option'
                  >
                    Create "{query}"
                  </ComboboxOption>
                ) : (
                  filteredManufacturers.map((item) => (
                    <ComboboxOption
                      key={item}
                      className={({ focus }) =>
                        `relative search-manufacturer__option ${
                          focus ? "bg-primary-blue text-white" : "text-gray-900"
                        }`
                      }
                      value={item}
                    >
                      {({ selected, focus }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {item}
                          </span>
  
                          {/* Show an focus blue background color if the option is selected */}
                          {selected ? (
                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${focus? "text-white": "text-pribg-primary-purple"}`}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </ComboboxOption>
                  ))
                )}
              </ComboboxOptions>
            </Transition>
          </div>
        </Combobox>
      </div>
    );
  };
  
  export default SearchManufacturer;