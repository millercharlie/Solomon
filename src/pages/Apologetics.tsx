import {
  apologeticsSidebar,
  loggedOutApologeticsData,
} from "@database/mockData";
import { AccountStatus, PageType } from "@libs/Types";
import StandardPage from "@pages/StandardPage";

const Apologetics: React.FC = () => {
  return (
    <StandardPage
      data={{
        _id: "apologetics_page",
        title: "Apologetics",
        pageType: PageType.APOLOGETICS,
        description:
          "Apologetics is the study of the truthfulness of Scripture and Christianity. This encapsulates answering common questions such as “does God exist?” and “did Jesus really rise from the dead?” Those who study apologetics, called apologists, use varying philosophical, scientific, historical, and logical arguments to defend the faith.",
        accountStatus: AccountStatus.GUEST, // TODO: This will almost certainly be done with context and not a prop
        rows: loggedOutApologeticsData.rows,
        sidebar: apologeticsSidebar,
        needsHelp: true,
      }}
    />
  );
};

export default Apologetics;
