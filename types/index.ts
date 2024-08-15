import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?:
  MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  textStyles: string;
  rightIcon?: string;
  isDisabled: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  cityMpg: number;
  combinationMpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuelType: string;
  highwayMpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

//  export interface SignUpProps {
//   children: React.ReactNode;
// }


export interface HomeProps {
  searchParams: FilterProps;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
