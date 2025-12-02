import { theologyData } from "@database/theologyData";
import { AccountStatus, PageType } from "@libs/Types";
import StandardPage from "@pages/StandardPage";

const Theology: React.FC = () => {
  return (
    <StandardPage
      data={{
        title: "Theology",
        pageType: PageType.THEOLOGY,
        description: theologyData.description,
        accountStatus: AccountStatus.GUEST, // TODO: This will almost certainly be done with context and not a prop
        rows: theologyData.rows,
        sidebar: [],
        needsHelp: true,
      }}
    />
  );
};

export default Theology;
