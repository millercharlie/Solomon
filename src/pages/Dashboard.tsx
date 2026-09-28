import Spinner from "@components/Spinner";
import StandardPage from "@pages/StandardPage";
import axios from "axios";
import useSWR from "swr";

/**
 * Theology Page
 */
const Dashboard: React.FC = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_API_URI}/pages/dashboard`,
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
export default Dashboard;
