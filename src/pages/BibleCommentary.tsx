import Spinner from "@components/Spinner";
import { fetcher } from "@libs/utils";
import StandardPage from "@pages/StandardPage";
import useSWR from "swr";

const BibleCommentary: React.FC = () => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URI}/pages/commentary`,
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

export default BibleCommentary;
