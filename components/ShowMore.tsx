"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utilities";

/**
 * ShowMore Component
 * Displays a button to load more results by updating the limit in the URL.
 * @param {ShowMoreProps} props - Component properties including the current page number and navigation status.
 */
const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  /**
   * Handle navigation to update the URL limit and fetch the next set of results.
   */
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10; // Calculate the new limit
    const newPathname = updateSearchParams("limit", `${newLimit}`); // Update URL params
    router.push(newPathname); // Navigate to the updated URL
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
          aria-label="Load more search results"
        />
      )}
    </div>
  );
};

export default ShowMore;
