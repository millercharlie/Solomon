import Spinner from "@components/Spinner";
import { fetcher } from "@libs/utils";
import StandardPage from "@pages/StandardPage";
import React from "react";
import useSWR from "swr";

/**
 * Theology Page
 */
const Theology: React.FC = () => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URI}/pages/theology`,
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
export default Theology;
