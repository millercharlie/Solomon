import Spinner from "@components/Spinner";
import { fetcher } from "@libs/utils";
import StandardPage from "@pages/StandardPage";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";

/**
 * Single Bible Book Page
 * @returns JSX.Element
 */
const BibleBook: React.FC = () => {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URI}/bible/book/${params.bookId}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    },
  );

  return isLoading ? (
    <Spinner />
  ) : data ? (
    <StandardPage data={data} />
  ) : (
    <p>{`Failed to load. ${error}`}</p>
  );
};

export default BibleBook;
