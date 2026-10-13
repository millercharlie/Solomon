import StandardPage from "@pages/StandardPage";
import Spinner from "@components/Spinner";
import { fetcher } from "@libs/utils";
import React from "react";
import useSWR from "swr";

/**
 * Apologetics Page
 */
const Apologetics: React.FC = () => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URI}/pages/apologetics`,
    fetcher,
  );
  return isLoading ? (
    <Spinner />
  ) : data ? (
    <StandardPage data={data} />
  ) : (
    <p>{`Failed to load. ${error}`}</p>
  );
};

export default Apologetics;
