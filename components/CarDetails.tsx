"use client";

import { CarProps } from "@/types";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import React, { Fragment } from "react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utilities";

interface CarProps {
    make: string;
    model: string;
    year: number;
    engineType?: string;
    color?: string;
    [key: string]: string | number | undefined;
  }
  

const CarImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
    <Image src={src} alt={alt} fill priority className="object-contain" />
  </div>
);

const CarInfoItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex justify-between gap-5 w-full text-right">
    <h4 className="text-grey capitalize">{label}</h4>
    <p className="text-black-100 font-semibold">{value}</p>
  </div>
);

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  if (!car) return null;

  const carInfo = Object.entries(car);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
              <button
  type="button"
  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
  onClick={closeModal}
  aria-label="Close details"
  title="Close details"
>
  <Image
    src={"/close.svg"}
    alt="Close"
    width={20}
    height={20}
    className="object-contain"
  />
</button>

<Image
  src={"/hero.png"}
  alt="Primary car model image"
  fill
  priority
  className="object-contain"
/>


                  <div className="flex gap-3">
                    {["29", "33", "27"].map((angle) => (
                      <CarImage
                        key={angle}
                        src={generateCarImageUrl(car, angle)}
                        alt={`Car view ${angle}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  {car.make && car.model && (
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                  )}

                  {carInfo.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-4">
                      {carInfo.map(([key, value], index) => (
                        <CarInfoItem
                          key={`car-info-${index}`}
                          label={key.split("_").join(" ")}
                          value={value}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
