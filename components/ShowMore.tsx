"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utilities";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathname);
  };

  return (
    <div className="w-full flex justify-center items-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue text-white rounded-full px-4 py-2 hover:bg-primary-blue-dark focus:ring focus:ring-offset-2 focus:ring-primary-blue-dark transition ease-in-out duration-200"
          handleClick={handleNavigation}
          textStyles="font-medium"
          isDisabled={false}
          aria-label="Load more search results"
        />
      )}
    </div>
  );
};

export default ShowMore;
