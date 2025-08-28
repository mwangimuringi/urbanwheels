"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";

import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type="submit"
    className={`-ml-3 z-10 ${otherClasses}`}
    aria-label="Search"
  >
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [debouncedModel, setDebouncedModel] = useState(model);

  const router = useRouter();

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (manufacturer.trim() === "" && model.trim() === "") {
        return alert("Please provide some input");
      }
      updateSearchParams(
        debouncedModel.toLowerCase(),
        manufacturer.toLowerCase()
      );
    },
    [manufacturer, debouncedModel]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedModel(model);
    }, 500); // 500ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [model]);

  const updateSearchParams = useCallback(
    (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if (model) searchParams.set("model", model);
      else searchParams.delete("model");

      if (manufacturer) searchParams.set("manufacturer", manufacturer);
      else searchParams.delete("manufacturer");

      router.push(`${window.location.pathname}?${searchParams.toString()}`);
    },
    [router]
  );

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input pl-10" // Added padding-left for icon space
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        image here

        
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
