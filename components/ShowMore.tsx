"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utilities";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathname);
  };

  return (
    <div className="w-full flex justify-center items-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white px-4 py-2 hover:bg-primary-blue-dark focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue-dark"
          handleClick={handleNavigation}
          textStyles="font-medium"
          isDisabled={false}
          aria-label="Load more results"
        />
      )}
    </div>
  );
};

export default ShowMore;
